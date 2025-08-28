'use client';

import { useState, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { logger } from '@/utils/logger';
import { useToastContext } from '@/context/ToastContext';
import { useCSRF } from './useCSRF';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

// Log configuration issues for debugging
if (!publishableKey) {
  logger.error('Stripe publishable key is not configured', undefined, {
    environment: process.env.NODE_ENV
  });
}

// Initialize Stripe promise once per module (recommended by Stripe)
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

interface UseStripeCheckoutReturn {
  loading: boolean;
  handleEnrollment: (courseType: string) => Promise<void>;
}

export const useStripeCheckout = (): UseStripeCheckoutReturn => {
  const [loading, setLoading] = useState(false);
  const { error: showError } = useToastContext();
  const { csrfToken, isLoading: csrfLoading } = useCSRF();

  const handleEnrollment = useCallback(async (courseType: string): Promise<void> => {
    if (!publishableKey) {
      showError(
        "設定エラー", 
        "Stripe設定に問題があります。管理者にお問い合わせください。"
      );
      return;
    }

    if (!csrfToken) {
      showError(
        "セキュリティエラー", 
        "セキュリティトークンが取得できません。ページを再読み込みしてください。"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify({ courseType }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Network response was not ok");
      }

      const data = await response.json();
      logger.debug("Checkout session API response", { 
        courseType, 
        hasUrl: !!data.url, 
        hasSessionId: !!data.sessionId 
      });

      // Follow Stripe's official recommendation: use window.location.href for external redirects
      // Note: stripe.redirectToCheckout is deprecated, prefer direct URL redirect
      if (data.url) {
        window.location.href = data.url;
      } else if (data.sessionId && stripePromise) {
        // Fallback: Legacy Stripe.js redirect (deprecated but maintained for compatibility)
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });
          if (error) {
            logger.error("Stripe redirect to checkout failed", error, { courseType });
            showError(
              "決済エラー", 
              "決済ページへの遷移に失敗しました。もう一度お試しください。"
            );
          }
        }
      } else {
        logger.error("Invalid checkout session response", undefined, {
          courseType,
          responseKeys: Object.keys(data || {})
        });
        showError(
          "決済エラー", 
          "決済セッションの作成に失敗しました。"
        );
      }
    } catch (error: any) {
      logger.error("Course enrollment process failed", error, { courseType });
      showError(
        "エラーが発生しました", 
        error.message || "予期しないエラーが発生しました。もう一度お試しください。"
      );
    } finally {
      setLoading(false);
    }
  }, [showError, csrfToken]);

  return {
    loading,
    handleEnrollment,
  };
};