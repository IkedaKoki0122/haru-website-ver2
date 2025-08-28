import { NextRequest, NextResponse } from 'next/server';
import { generateCSRFToken } from '@/utils/csrf';

/**
 * CSRFトークンを生成するAPIエンドポイント
 * GET /api/csrf
 * 
 * セキュリティ要件：
 * - HTTPSでのみ動作
 * - SameSite Strictクッキーでトークンハッシュを保存
 * - HttpOnlyクッキーでXSS攻撃を防止
 */
export async function GET(request: NextRequest) {
  try {
    // HTTPS強制（本番環境）
    if (process.env.NODE_ENV === 'production') {
      const protocol = request.headers.get('x-forwarded-proto') || 'http';
      if (protocol !== 'https') {
        return NextResponse.json(
          { error: 'HTTPS required' },
          { status: 400 }
        );
      }
    }

    const { token, hash } = await generateCSRFToken();
    
    const response = NextResponse.json({ csrfToken: token });
    
    // CSRFトークンハッシュをセキュアクッキーに保存
    // Next.js公式ドキュメント準拠の設定
    response.cookies.set('csrf-hash', hash, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 24時間
    });
    
    return response;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('CSRF token generation error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}