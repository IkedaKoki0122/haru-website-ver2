"use client";
import Image from "next/image";
import { useState, useMemo, useCallback, memo, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { logger } from "@/utils/logger";
import { useToastContext } from "@/context/ToastContext";
import { useCSRF } from "@/hooks/useCSRF";
import { motion, useInView } from "framer-motion";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

function CoursesSection() {
  const [loading, setLoading] = useState(false);
  const { error: showError } = useToastContext();
  const { csrfToken, isLoading: csrfLoading, error: csrfError } = useCSRF();

  const courses: Course[] = useMemo(() => [
    {
      id: "business",
      title: "ビジネス英会話コース",
      description: "ビジネスシーンで必要な英会話力を習得",
      price: "¥544,500〜",
      icon: "/icon-business.svg",
    },
    {
      id: "toeic",
      title: "TOEIC L&R TESTコース",
      description: "スコアアップに特化した学習プログラム",
      price: "¥544,500〜",
      icon: "/icon-toeic.svg",
    },
    {
      id: "toefl",
      title: "TOEFL iBT TESTコース",
      description: "海外大学進学を目指す方向け",
      price: "¥544,500〜",
      icon: "/icon-toefl.svg",
    },
    {
      id: "beginner",
      title: "初級者コース",
      description: "英語学習が初めての方向け",
      price: "¥544,500〜",
      icon: "/icon-beginner.svg",
    },
  ], []);

  const handleEnrollment = useCallback(async (courseType: string) => {
    if (!publishableKey) {
      showError("設定エラー", "Stripe設定に問題があります。管理者にお問い合わせください。");
      return;
    }

    if (!csrfToken) {
      showError("エラー", "セキュリティトークンが取得できません。ページを再読み込みしてください。");
      return;
    }

    setLoading(true);
    try {
      logger.debug('Sending request with CSRF token', { 
        courseType,
        tokenPreview: csrfToken ? csrfToken.substring(0, 8) + '...' : 'none' 
      });
      
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
        let errorMessage = `HTTP ${response.status}`;
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorData.details || errorMessage;
          } else {
            const textResponse = await response.text();
            logger.warn("Non-JSON API response", { 
              status: response.status, 
              contentType, 
              textPreview: textResponse.substring(0, 100) 
            });
            errorMessage = `API returned ${contentType || 'unknown format'}`;
          }
        } catch (parseError) {
          logger.error("Failed to parse error response", parseError, { status: response.status });
        }
        throw new Error(errorMessage);
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        const textResponse = await response.text();
        logger.error("Failed to parse success response as JSON", parseError, { 
          textPreview: textResponse.substring(0, 100) 
        });
        throw new Error("APIから無効なレスポンスが返されました");
      }
      logger.debug("Course enrollment API response", { 
        courseId: courseType, 
        hasUrl: !!data.url, 
        hasSessionId: !!data.sessionId 
      });

      // Stripe Checkout: 外部URL（Stripe）へのリダイレクトは window.location.href が推奨
      if (data.url) {
        window.location.href = data.url;
      } else if (data.sessionId && stripePromise) {
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });
          if (error) {
            logger.error("Stripe checkout redirect failed", error, { courseId: courseType });
            showError("決済エラー", "決済ページへの遷移に失敗しました。もう一度お試しください。");
          }
        }
      } else {
        logger.error("Invalid checkout session response from API", undefined, {
          courseId: courseType,
          responseKeys: Object.keys(data || {})
        });
        showError("決済エラー", "決済セッションの作成に失敗しました。");
      }
    } catch (error: any) {
      logger.error("Course enrollment failed", error, { courseId: courseType });
      showError("エラー", `エラーが発生しました: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [csrfToken, showError]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            コースラインナップ
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course) => (
            <motion.div 
              key={course.id} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-12 h-12 mx-auto mb-3"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={course.icon}
                  alt={course.title}
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </motion.div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                {course.description}
              </p>
              <div className="text-lg font-bold text-orange-500 mb-3">
                {course.price}
              </div>
              <motion.button
                onClick={() => handleEnrollment(course.id)}
                disabled={loading || csrfLoading || !csrfToken}
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-300 font-medium text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "処理中..." : csrfLoading ? "準備中..." : "受講する"}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CoursesSection);