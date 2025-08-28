import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { logger } from '@/utils/logger';
import { stripeRetrieveLimiter, callStripeAPI } from '@/utils/stripeRateLimit';
import { getClientIdentifier } from '@/utils/rateLimiter';

if (!process.env.STRIPE_SECRET_KEY) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
  } else {
    throw new Error('Payment service configuration error');
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-07-30.basil',
});

async function handleGET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');
  const clientId = getClientIdentifier(request);

  if (!sessionId) {
    logger.warn('Session ID not provided in request');
    return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
  }

  if (typeof sessionId !== 'string' || sessionId.trim().length === 0) {
    logger.warn('Invalid session ID format', { sessionId });
    return NextResponse.json({ error: 'Invalid session ID format' }, { status: 400 });
  }

  try {
    // Stripe APIコールをレート制限付きで実行
    const session = await callStripeAPI(
      () => stripe.checkout.sessions.retrieve(sessionId),
      stripeRetrieveLimiter,
      clientId
    );
    
    logger.info('Stripe checkout session retrieved successfully', {
      sessionId: session.id,
      paymentStatus: session.payment_status
    });
    
    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email,
    });
  } catch (error) {
    // レート制限エラーの処理
    if (error instanceof Error && error.name === 'StripeRateLimitError') {
      logger.warn("Stripe rate limit exceeded for session retrieval", {
        clientId: clientId.substring(0, 8) + '...',
        message: error.message,
        sessionId
      });
      
      return NextResponse.json(
        { 
          error: "Rate limit exceeded",
          message: "リクエストが多すぎます。しばらく待ってから再試行してください。"
        },
        { status: 429 }
      );
    }
    
    if (error instanceof Stripe.errors.StripeError) {
      logger.error('Stripe error occurred during session retrieval', {
        type: error.type,
        message: error.message,
        requestId: error.requestId,
        sessionId
      });
      
      switch (error.type) {
        case 'StripeInvalidRequestError':
          return NextResponse.json(
            { 
              error: 'Invalid session ID',
              ...(process.env.NODE_ENV === 'development' && { details: error.message })
            },
            { status: 404 }
          );
        case 'StripeAuthenticationError':
          return NextResponse.json(
            { error: 'Authentication failed' },
            { status: 401 }
          );
        case 'StripeRateLimitError':
          return NextResponse.json(
            { error: 'Rate limit exceeded' },
            { status: 429 }
          );
        default:
          return NextResponse.json(
            { 
              error: 'Payment service error',
              ...(process.env.NODE_ENV === 'development' && { details: error.message })
            },
            { status: 500 }
          );
      }
    } else {
      logger.error('Unexpected error during session retrieval', error, { sessionId });
      return NextResponse.json(
        { error: 'Failed to retrieve session' },
        { status: 500 }
      );
    }
  }
}

// Stripe専用レート制限が組み込まれたハンドラーをエクスポート
export const GET = handleGET;