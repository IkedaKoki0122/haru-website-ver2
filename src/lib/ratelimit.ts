import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Upstash Redis接続設定
// 本番環境では環境変数UPSTASH_REDIS_REST_URLとUPSTASH_REDIS_REST_TOKENを設定
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// レート制限設定 - OWASP推奨値に基づく
export const rateLimiters = {
  // 一般的なAPIエンドポイント用レート制限（30リクエスト/分）
  standard: redis ? new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, '1 m'),
    analytics: true,
    prefix: 'ratelimit:standard',
  }) : null,

  // カウンセリングエンドポイント用レート制限（5リクエスト/分） - より厳格
  counseling: redis ? new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'),
    analytics: true,
    prefix: 'ratelimit:counseling',
  }) : null,

  // Stripe webhook用レート制限（100リクエスト/分） - Stripeのベストプラクティス
  webhook: redis ? new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'),
    analytics: true,
    prefix: 'ratelimit:webhook',
  }) : null,

  // 認証関連エンドポイント用レート制限（10リクエスト/分） - セキュリティ重視
  auth: redis ? new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '1 m'),
    analytics: true,
    prefix: 'ratelimit:auth',
  }) : null,
};

// フォールバック用メモリベースレート制限（Redisが利用できない場合）
const memoryStore = new Map<string, { count: number; resetTime: number }>();

/**
 * メモリベースレート制限（フォールバック用）
 */
function checkMemoryRateLimit(
  clientId: string,
  maxRequests: number,
  windowMs: number
): { success: boolean; limit: number; remaining: number; reset: Date } {
  const now = Date.now();
  const windowStart = now;
  const resetTime = windowStart + windowMs;
  
  // 期限切れエントリの定期クリーンアップ
  if (Math.random() < 0.1) {
    for (const [key, value] of memoryStore.entries()) {
      if (now >= value.resetTime) {
        memoryStore.delete(key);
      }
    }
  }
  
  const record = memoryStore.get(clientId);
  
  if (!record || now >= record.resetTime) {
    memoryStore.set(clientId, { count: 1, resetTime });
    return { 
      success: true, 
      limit: maxRequests, 
      remaining: maxRequests - 1, 
      reset: new Date(resetTime)
    };
  }
  
  if (record.count >= maxRequests) {
    return { 
      success: false, 
      limit: maxRequests, 
      remaining: 0, 
      reset: new Date(record.resetTime)
    };
  }
  
  record.count++;
  return { 
    success: true, 
    limit: maxRequests, 
    remaining: maxRequests - record.count, 
    reset: new Date(record.resetTime)
  };
}

/**
 * レート制限チェック関数
 * Redisが利用可能な場合はUpstash、そうでなければメモリベースを使用
 */
export async function checkRateLimit(
  identifier: string,
  type: 'standard' | 'counseling' | 'webhook' | 'auth' = 'standard'
): Promise<{ success: boolean; limit: number; remaining: number; reset: Date }> {
  const limiter = rateLimiters[type];
  
  if (limiter) {
    // Redis（Upstash）ベースのレート制限
    const result = await limiter.limit(identifier);
    return {
      success: result.success,
      limit: result.limit,
      remaining: result.remaining,
      reset: new Date(result.reset),
    };
  } else {
    // フォールバック: メモリベースレート制限
    const limits = {
      standard: 30,
      counseling: 5,
      webhook: 100,
      auth: 10,
    };
    
    return checkMemoryRateLimit(identifier, limits[type], 60000); // 1分
  }
}

/**
 * レート制限エラーレスポンスの生成
 */
export function createRateLimitResponse(
  success: boolean,
  limit: number,
  remaining: number,
  reset: Date,
  message: string = 'リクエストが多すぎます。しばらく待ってから再試行してください。'
) {
  if (success) {
    return null; // エラーなし
  }

  const retryAfterSeconds = Math.ceil((reset.getTime() - Date.now()) / 1000);
  
  return {
    status: 429,
    body: {
      error: 'Too Many Requests',
      message,
      retryAfter: retryAfterSeconds,
    },
    headers: {
      'Retry-After': retryAfterSeconds.toString(),
      'X-RateLimit-Limit': limit.toString(),
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': reset.getTime().toString(),
    },
  };
}

/**
 * レート制限ヘッダーの追加
 */
export function addRateLimitHeaders(
  headers: Headers,
  limit: number,
  remaining: number,
  reset: Date
) {
  headers.set('X-RateLimit-Limit', limit.toString());
  headers.set('X-RateLimit-Remaining', remaining.toString());
  headers.set('X-RateLimit-Reset', reset.getTime().toString());
}

/**
 * Redis接続状態のチェック
 */
export function isRedisAvailable(): boolean {
  return redis !== null;
}