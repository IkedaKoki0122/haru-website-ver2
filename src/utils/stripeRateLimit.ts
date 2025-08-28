/**
 * Stripe API Rate Limiting Utility
 * 
 * Stripe公式ドキュメントに基づく実装:
 * - Live mode: 100 operations/second
 * - Test mode: 25 operations/second  
 * - 指数バックオフによるリトライ機能
 * - Token bucket アルゴリズム
 */

interface StripeRateLimitConfig {
  maxRequests: number;
  windowMs: number;
  retryCount: number;
  baseDelay: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
}

interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  jitter: boolean;
}

class StripeRateLimiter {
  private store = new Map<string, { count: number; resetTime: number }>();
  private config: StripeRateLimitConfig;

  constructor(config: StripeRateLimitConfig) {
    this.config = config;
  }

  /**
   * レート制限チェック (Token Bucket Algorithm)
   * Stripe推奨のアルゴリズムを使用
   */
  checkLimit(identifier: string): RateLimitResult {
    const now = Date.now();
    const resetTime = now + this.config.windowMs;
    
    // 期限切れエントリのクリーンアップ
    this.cleanup();
    
    const record = this.store.get(identifier);
    
    if (!record || now >= record.resetTime) {
      // 新しいウィンドウまたは期限切れ
      this.store.set(identifier, { count: 1, resetTime });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime
      };
    }
    
    if (record.count >= this.config.maxRequests) {
      // レート制限に達している
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      return {
        allowed: false,
        remaining: 0,
        resetTime: record.resetTime,
        retryAfter
      };
    }
    
    // リクエストカウントを増加
    record.count++;
    return {
      allowed: true,
      remaining: this.config.maxRequests - record.count,
      resetTime: record.resetTime
    };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, value] of this.store.entries()) {
      if (now >= value.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

/**
 * 指数バックオフによるリトライ機能
 * Stripe公式推奨の実装パターン
 */
export async function retryWithExponentialBackoff<T>(
  operation: () => Promise<T>,
  config: RetryConfig = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 16000,
    jitter: true
  }
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      // 最後の試行の場合はエラーをthrow
      if (attempt === config.maxRetries) {
        throw lastError;
      }
      
      // Stripe Rate Limit Errorの場合のみリトライ
      if (error instanceof Error && 
          (error.message.includes('rate_limit') || 
           error.message.includes('429'))) {
        
        // 指数バックオフによる待機時間計算
        let delay = config.baseDelay * Math.pow(2, attempt);
        delay = Math.min(delay, config.maxDelay);
        
        // ジッターを追加（thundering herd問題を回避）
        if (config.jitter) {
          delay = delay + Math.random() * 1000;
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Stripe rate limit hit, retrying in ${delay}ms (attempt ${attempt + 1}/${config.maxRetries + 1})`);
        }
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        // Rate limit以外のエラーの場合は即座にthrow
        throw lastError;
      }
    }
  }
  
  throw lastError!;
}

// Stripe用のレートリミッター設定
// 本番環境とテスト環境で異なる制限を適用
const isProduction = process.env.NODE_ENV === 'production';

export const stripeCheckoutLimiter = new StripeRateLimiter({
  maxRequests: 10, // 決済セッション作成は保守的に制限
  windowMs: 60 * 1000, // 1分
  retryCount: 3,
  baseDelay: 1000
});

export const stripeRetrieveLimiter = new StripeRateLimiter({
  maxRequests: isProduction ? 80 : 20, // 本番: 80req/min, テスト: 20req/min
  windowMs: 60 * 1000, // 1分
  retryCount: 3,
  baseDelay: 500
});

export const stripeGeneralLimiter = new StripeRateLimiter({
  maxRequests: isProduction ? 90 : 20, // 本番: 90req/min, テスト: 20req/min  
  windowMs: 60 * 1000, // 1分
  retryCount: 3,
  baseDelay: 1000
});

/**
 * Stripe APIコール用のラッパー関数
 * 自動的にレート制限チェックとリトライを適用
 */
export async function callStripeAPI<T>(
  operation: () => Promise<T>,
  limiter: StripeRateLimiter,
  identifier: string
): Promise<T> {
  const rateLimitResult = limiter.checkLimit(identifier);
  
  if (!rateLimitResult.allowed) {
    const error = new Error(`Rate limit exceeded. Retry after ${rateLimitResult.retryAfter} seconds`);
    error.name = 'StripeRateLimitError';
    throw error;
  }
  
  // 指数バックオフを適用してAPI呼び出し
  return retryWithExponentialBackoff(operation);
}

export type { RateLimitResult, RetryConfig };