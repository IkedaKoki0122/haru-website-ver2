import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { logger } from "@/utils/logger";
import { getClientIdentifier } from "@/utils/rateLimiter";
import { stripeCheckoutLimiter, callStripeAPI } from "@/utils/stripeRateLimit";

// 環境変数の確認
if (!process.env.STRIPE_SECRET_KEY) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
  } else {
    throw new Error("Payment service configuration error");
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(request: NextRequest) {
  let courseType: string = 'unknown';
  
  // Stripe公式推奨: 決済関連APIにレート制限を適用
  const clientId = getClientIdentifier(request);
  
  try {
    const body = await request.json();
    courseType = body.courseType;

    // コース料金設定
    const courseData = {
      business: {
        name: "ビジネス英会話コース",
        price: 544500,
        description: "ビジネスシーンで必要な英会話力を習得",
      },
      toeic: {
        name: "TOEIC L&R TESTコース",
        price: 544500,
        description: "スコアアップに特化した学習プログラム",
      },
      toefl: {
        name: "TOEFL iBT TESTコース",
        price: 544500,
        description: "海外大学進学を目指す方向け",
      },
      beginner: {
        name: "初級者コース",
        price: 544500,
        description: "英語学習が初めての方向け",
      },
    };

    const course = courseData[courseType as keyof typeof courseData];
    if (!course) {
      return NextResponse.json(
        { error: "Invalid course type" },
        { status: 400 }
      );
    }

    // Stripe APIコールをレート制限付きで実行
    const session = await callStripeAPI(
      () => stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: course.name,
                description: course.description,
              },
              unit_amount: course.price,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.nextUrl.origin}/`,
        locale: "ja",
        payment_method_options: {
          card: {
            installments: {
              enabled: true,
            },
          },
        },
      }),
      stripeCheckoutLimiter,
      clientId
    );

    logger.info("Stripe checkout session created successfully", { 
      sessionId: session.id,
      courseType: courseType,
      courseName: course.name,
      clientId: clientId.substring(0, 8) + '...'
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    // レート制限エラーの処理
    if (error instanceof Error && error.name === 'StripeRateLimitError') {
      logger.warn("Stripe rate limit exceeded", {
        clientId: clientId.substring(0, 8) + '...',
        message: error.message,
        courseType
      });
      
      return NextResponse.json(
        { 
          error: "Rate limit exceeded",
          message: "リクエストが多すぎます。しばらく待ってから再試行してください。"
        },
        { status: 429 }
      );
    }
    
    // Stripe公式ドキュメントに基づくエラーハンドリング
    if (error instanceof Stripe.errors.StripeError) {
      logger.error("Stripe error occurred", {
        type: error.type,
        message: error.message,
        requestId: error.requestId,
        courseType
      });
      
      // Stripeエラータイプに応じた処理
      switch (error.type) {
        case 'StripeInvalidRequestError':
          return NextResponse.json(
            { 
              error: "Invalid request parameters",
              ...(process.env.NODE_ENV === 'development' && { details: error.message })
            },
            { status: 400 }
          );
        case 'StripeAuthenticationError':
          return NextResponse.json(
            { error: "Authentication failed" },
            { status: 401 }
          );
        case 'StripeRateLimitError':
          return NextResponse.json(
            { error: "Rate limit exceeded" },
            { status: 429 }
          );
        default:
          return NextResponse.json(
            { 
              error: "Payment service error",
              ...(process.env.NODE_ENV === 'development' && { details: error.message })
            },
            { status: 500 }
          );
      }
    } else {
      // Stripe以外のエラー
      logger.error("Unexpected error during checkout session creation", error, { 
        courseType
      });
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }
  }
}
