import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/utils/logger';
import { contactRateLimiter, getClientIdentifier } from '@/utils/rateLimiter';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientId = getClientIdentifier(request);
    const rateLimitResult = contactRateLimiter.checkLimit(clientId);
    
    if (!rateLimitResult.allowed) {
      const resetTimeSeconds = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      logger.warn('Rate limit exceeded for contact form', {
        clientId: clientId.replace(/\d+/g, 'x'), // Anonymize IP for logging
        resetInSeconds: resetTimeSeconds,
      });
      
      return NextResponse.json(
        { 
          error: 'リクエストが多すぎます。しばらく時間をおいてから再度お試しください。',
          retryAfter: resetTimeSeconds 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': resetTimeSeconds.toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
          }
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // 必須フィールドのバリデーション
    if (
      typeof name !== 'string' || name.trim() === '' ||
      typeof email !== 'string' || email.trim() === '' ||
      typeof subject !== 'string' || subject.trim() === '' ||
      typeof message !== 'string' || message.trim() === ''
    ) {
      return NextResponse.json(
        { error: '必須フィールドが入力されていません。' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック（HTML5準拠の厳密なバリデーション）
    // RFC 5322準拠のより厳密な正規表現パターン
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください。' },
        { status: 400 }
      );
    }

    // メールアドレスの長さ制限（RFC 5321準拠）
    if (email.length > 254) {
      return NextResponse.json(
        { error: 'メールアドレスが長すぎます。' },
        { status: 400 }
      );
    }

    // ローカル部（@より前）の長さ制限
    const localPart = email.split('@')[0];
    if (localPart.length > 64) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません。' },
        { status: 400 }
      );
    }

    // ここで実際の処理を行う（例：メール送信、データベース保存など）
    logger.info('お問い合わせを受信', {
      name,
      email: email.replace(/(.{2}).*(@.*)/, "$1***$2"),
      hasPhone: typeof phone === 'string' && phone.trim() !== '',
      subject,
      hasMessage: typeof message === 'string' && message.trim() !== '',
      timestamp: new Date().toISOString(),
    });

    // 実際のプロダクションでは、ここでメール送信サービス（SendGrid、AWS SESなど）を使用
    // 例：
    // await sendEmail({
    //   to: 'contact@eikaiwa-kenkyujo.com',
    //   subject: `お問い合わせ: ${subject}`,
    //   body: `
    //     お名前: ${name}
    //     メールアドレス: ${email}
    //     電話番号: ${phone || '未入力'}
    //     お問い合わせ種別: ${subject}
    //     
    //     お問い合わせ内容:
    //     ${message}
    //   `
    // });

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。' },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
        }
      }
    );
  } catch (error) {
    logger.error('お問い合わせ処理エラー', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらく時間をおいてから再度お試しください。' },
      { status: 500 }
    );
  }
}