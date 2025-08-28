import { NextRequest } from 'next/server';
import { logger } from './logger';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// メモリベースのレート制限ストア（本番環境ではRedis等を推奨）
const store = new Map<string, RateLimitEntry>();

// 定期的にメモリをクリーンアップ
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now > entry.resetTime) {
      store.delete(key);
    }
  }
}, 60 * 1000); // 1分毎にクリーンアップ

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  keyGenerator?: (request: NextRequest) => string;
}

/**
 * レート制限チェック関数
 * @param request - NextRequestオブジェクト
 * @param config - レート制限設定
 * @returns { success: boolean, limit: number, remaining: number, resetTime: number }
 */
export function checkRateLimit(
  request: NextRequest,
  config: RateLimitConfig
): {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
} {
  const { maxRequests, windowMs, keyGenerator } = config;
  
  // キージェネレーターがない場合はIPアドレスを使用
  const key = keyGenerator 
    ? keyGenerator(request)
    : getClientIP(request);

  const now = Date.now();
  const windowStart = now - windowMs;
  
  let entry = store.get(key);
  
  if (!entry || entry.resetTime <= now) {
    // 新しいエントリまたは期限切れ
    entry = {
      count: 0,
      resetTime: now + windowMs
    };
  }
  
  entry.count++;
  store.set(key, entry);
  
  const remaining = Math.max(0, maxRequests - entry.count);
  const success = entry.count <= maxRequests;
  
  if (!success) {
    logger.warn('Rate limit exceeded', {
      key,
      count: entry.count,
      limit: maxRequests,
      resetTime: entry.resetTime,
      userAgent: request.headers.get('user-agent'),
    });
  }
  
  return {
    success,
    limit: maxRequests,
    remaining,
    resetTime: entry.resetTime,
  };
}

/**
 * クライアントIPアドレスを取得
 */
function getClientIP(request: NextRequest): string {
  // Vercel、Netlify、CloudFlareなどのヘッダーをチェック
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  
  // フォールバック（開発環境等）
  return request.ip || '127.0.0.1';
}

/**
 * レート制限ミドルウェア高次関数
 */
export function withRateLimit<T extends any[]>(
  handler: (request: NextRequest, ...args: T) => Promise<Response>,
  config: RateLimitConfig
) {
  return async (request: NextRequest, ...args: T): Promise<Response> => {
    const result = checkRateLimit(request, config);
    
    if (!result.success) {
      logger.warn('Request blocked by rate limit', {
        ip: getClientIP(request),
        userAgent: request.headers.get('user-agent'),
        url: request.url,
      });
      
      return new Response(
        JSON.stringify({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': result.limit.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': result.resetTime.toString(),
            'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }
    
    // レート制限ヘッダーを追加してハンドラーを実行
    const response = await handler(request, ...args);
    
    // レート制限情報をレスポンスヘッダーに追加
    response.headers.set('X-RateLimit-Limit', result.limit.toString());
    response.headers.set('X-RateLimit-Remaining', result.remaining.toString());
    response.headers.set('X-RateLimit-Reset', result.resetTime.toString());
    
    return response;
  };
}