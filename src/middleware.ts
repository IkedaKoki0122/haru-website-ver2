import { NextRequest, NextResponse } from 'next/server';
import { extractCSRFToken, verifyCSRFToken, verifyOrigin } from '@/utils/csrf';
import { logger } from '@/utils/logger';
import { 
  checkRateLimit, 
  createRateLimitResponse, 
  addRateLimitHeaders,
  isRedisAvailable 
} from '@/lib/ratelimit';

/**
 * Next.js Middleware for Security Protection
 * 
 * セキュリティ要件：
 * - Redis永続化レート制限（本番対応）
 * - POSTリクエストに対するCSRFトークン検証
 * - Origin/Hostヘッダー検証
 * - SameSite Strictクッキー設定
 * - セキュリティヘッダーの追加
 * - Stripeベストプラクティス準拠
 */
export async function middleware(request: NextRequest) {
  // クライアントIDの取得（IP優先、フォールバック付き）
  const clientId = request.ip || 
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
    request.headers.get('x-real-ip') || 
    'unknown';
  
  // API エンドポイントに対するレート制限
  if (request.nextUrl.pathname.startsWith('/api/')) {
    let rateLimitType: 'standard' | 'counseling' | 'webhook' | 'auth' = 'standard';
    
    // エンドポイント別レート制限タイプの決定
    if (request.nextUrl.pathname === '/api/counseling') {
      rateLimitType = 'counseling';
    } else if (request.nextUrl.pathname.startsWith('/api/webhook/')) {
      rateLimitType = 'webhook';
    } else if (request.nextUrl.pathname.startsWith('/api/auth/') || 
               request.nextUrl.pathname === '/api/csrf') {
      rateLimitType = 'auth';
    }
    
    try {
      const rateLimit = await checkRateLimit(clientId, rateLimitType);
      
      // レート制限エラーレスポンスの生成
      const errorResponse = createRateLimitResponse(
        rateLimit.success,
        rateLimit.limit,
        rateLimit.remaining,
        rateLimit.reset,
        'リクエストが多すぎます。しばらく待ってから再試行してください。'
      );
      
      if (errorResponse) {
        logger.warn('Rate limit exceeded', {
          clientId: clientId.substring(0, 8) + '...',
          endpoint: request.nextUrl.pathname,
          method: request.method,
          rateLimitType,
          redisAvailable: isRedisAvailable()
        });
        
        return NextResponse.json(errorResponse.body, {
          status: errorResponse.status,
          headers: errorResponse.headers
        });
      }
      
      // 正常なレスポンスにレート制限ヘッダーを設定
      const response = NextResponse.next();
      addRateLimitHeaders(response.headers, rateLimit.limit, rateLimit.remaining, rateLimit.reset);
      
      // セキュリティヘッダーとCSRF処理のためにレスポンスを継続
      return await applySecurityAndCSRF(request, response);
      
    } catch (error) {
      // レート制限チェックでエラーが発生した場合はログを出力してリクエストを通す
      logger.error('Rate limit check failed', {
        error: error instanceof Error ? error.message : 'Unknown error',
        endpoint: request.nextUrl.pathname,
        clientId: clientId.substring(0, 8) + '...',
        redisAvailable: isRedisAvailable()
      });
      
      const response = NextResponse.next();
      return await applySecurityAndCSRF(request, response);
    }
  }
  
  // API以外のリクエストには通常の処理を適用
  const response = NextResponse.next();
  return await applySecurityAndCSRF(request, response);
}

/**
 * セキュリティヘッダーとCSRF保護を適用する共通関数
 */
async function applySecurityAndCSRF(request: NextRequest, response: NextResponse) {
  
  // セキュリティヘッダーの設定（OWASP推奨）
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // CSP (Content Security Policy) の設定
  const cspHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' js.stripe.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' api.stripe.com",
    "frame-src js.stripe.com",
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // APIルートのPOSTリクエストに対するCSRF保護
  if (request.method === 'POST' && request.nextUrl.pathname.startsWith('/api/')) {
    // CSRFトークン取得エンドポイントは除外
    if (request.nextUrl.pathname === '/api/csrf') {
      return response;
    }
    
    // Origin/Hostヘッダー検証（Next.js公式推奨）
    if (!verifyOrigin(request)) {
      logger.warn('CSRF: Origin/Host mismatch', {
        origin: request.headers.get('origin'),
        host: request.headers.get('host'),
        url: request.nextUrl.pathname
      });
      
      return NextResponse.json(
        { error: 'Invalid origin' },
        { status: 403 }
      );
    }
    
    // CSRFトークン検証
    const csrfToken = extractCSRFToken(request);
    const csrfHash = request.cookies.get('csrf-hash')?.value;
    
    const tokenIsValid = csrfToken && csrfHash ? await verifyCSRFToken(csrfToken, csrfHash) : false;
    
    if (!csrfToken || !csrfHash || !tokenIsValid) {
      logger.warn('CSRF: Token validation failed', {
        hasToken: !!csrfToken,
        hasHash: !!csrfHash,
        tokenIsValid,
        tokenPreview: csrfToken ? csrfToken.substring(0, 8) + '...' : 'none',
        hashPreview: csrfHash ? csrfHash.substring(0, 8) + '...' : 'none',
        url: request.nextUrl.pathname
      });
      
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }
  }
  
  // SameSite Strictクッキーの設定を強制
  const cookieHeader = response.headers.get('set-cookie');
  if (cookieHeader && !cookieHeader.includes('SameSite=Strict')) {
    // 既存のクッキーにSameSite Strictを追加
    response.headers.set('set-cookie', cookieHeader + '; SameSite=Strict');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};