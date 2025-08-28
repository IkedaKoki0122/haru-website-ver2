import { NextRequest } from 'next/server';

/**
 * CSRFトークンを生成する（Edge Runtime対応）
 * セキュリティ要件：
 * - 十分な長さのランダムトークン（32バイト）
 * - SHA-256ハッシュによる署名（Web Crypto API使用）
 */
export async function generateCSRFToken(): Promise<{ token: string; hash: string }> {
  // Edge Runtime対応: Web Crypto APIを使用
  const tokenArray = new Uint8Array(32);
  crypto.getRandomValues(tokenArray);
  const token = Array.from(tokenArray, byte => byte.toString(16).padStart(2, '0')).join('');
  
  const secret = process.env.CSRF_SECRET;
  if (!secret) {
    throw new Error('CSRF_SECRET environment variable is required but not set');
  }
  
  const data = new TextEncoder().encode(token + secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hash = Array.from(new Uint8Array(hashBuffer), byte => byte.toString(16).padStart(2, '0')).join('');
  
  return { token, hash };
}

/**
 * CSRFトークンを検証する（Edge Runtime対応）
 * @param token クライアントから送信されたトークン
 * @param hash セッションに保存されているハッシュ
 */
export async function verifyCSRFToken(token: string, hash: string): Promise<boolean> {
  if (!token || !hash) return false;
  
  // Edge Runtime対応: Web Crypto APIを使用
  const secret = process.env.CSRF_SECRET;
  if (!secret) {
    throw new Error('CSRF_SECRET environment variable is required but not set');
  }
  
  const data = new TextEncoder().encode(token + secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const expectedHash = Array.from(new Uint8Array(hashBuffer), byte => byte.toString(16).padStart(2, '0')).join('');
  
  // タイミング攻撃を防ぐため、constant-time比較
  let result = 0;
  if (expectedHash.length !== hash.length) {
    return false;
  }
  
  for (let i = 0; i < expectedHash.length; i++) {
    result |= expectedHash.charCodeAt(i) ^ hash.charCodeAt(i);
  }
  
  return result === 0;
}

/**
 * リクエストからCSRFトークンを抽出する
 * 複数のヘッダー名をサポート（RFC準拠）
 */
export function extractCSRFToken(request: NextRequest): string | null {
  // RFC 7252に準拠したヘッダー名をチェック
  const headers = [
    'x-csrf-token',
    'x-xsrf-token',
    'csrf-token'
  ];
  
  for (const header of headers) {
    const token = request.headers.get(header);
    if (token) return token;
  }
  
  return null;
}

/**
 * OriginヘッダーとHostヘッダーの検証
 * Next.js公式ドキュメントに基づく実装
 * Same-Origin PolicyでOriginがnullの場合も許可（セキュアなSame-Originリクエスト）
 */
export function verifyOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host') || request.headers.get('x-forwarded-host');
  
  if (!host) {
    return false;
  }
  
  // Same-Origin PolicyによりOriginがnullの場合は許可
  // これは同じオリジンからのリクエストでブラウザが自動的にOriginを省略する場合
  if (!origin || origin === 'null') {
    // Refererヘッダーで追加検証
    const referer = request.headers.get('referer');
    if (referer) {
      try {
        const refererUrl = new URL(referer);
        return refererUrl.host === host;
      } catch {
        // Refererが無効な場合はCSRFトークン検証に委ねる
        return true;
      }
    }
    // Refererもない場合はCSRFトークン検証に委ねる
    return true;
  }
  
  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}