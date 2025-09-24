"use client";
import { useState, useMemo, memo, useRef, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

function PlanSelectionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const plans: Plan[] = useMemo(
    () => [
      {
        id: "basic",
        name: "ベーシックプラン",
        price: "¥49,800",
        duration: "3ヶ月",
        description:
          "語学学校選びをサポートする基本プランです。学校紹介と申請チェックを行います。",
        features: [
          "語学学校の紹介・選定サポート",
          "学校情報の詳細提供",
          "入学手続きのガイダンス",
          "申請書類のチェック・添削",
          "メールサポート",
          "※アプリケーション手続きはご自身で実施",
        ],
        icon: SchoolIcon,
      },
      {
        id: "medium",
        name: "ミディアムプラン",
        price: "¥79,800",
        duration: "6ヶ月",
        description:
          "留学準備から現地生活まで総合的にサポートする充実プランです。",
        features: [
          "学校選び・出願サポート",
          "アパート紹介・契約代行",
          "空港送迎サービス",
          "ビザ申請サポート",
          "24時間LINE相談対応",
        ],
        popular: true,
        icon: RocketLaunchIcon,
      },
      {
        id: "premium",
        name: "プレミアムプラン",
        price: "¥129,800",
        duration: "12ヶ月",
        description:
          "本格的に英語力を向上させたい方向けの最上級プランです。完全カスタマイズ指導を提供します。",
        features: [
          "月8回のオンライン個別指導",
          "完全カスタマイズカリキュラム",
          "4技能総合強化プログラム",
          "週次進捗レポート・分析",
          "24時間優先サポート",
          "全教材・特別コンテンツ提供",
        ],
        icon: WorkspacePremiumIcon,
      },
    ],
    []
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            あなたに最適な学習プランを選択
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            目標やレベルに合わせた3つのプランをご用意。専門講師による個別指導で確実にスキルアップを実現します。
          </p>
        </motion.div>

        {isSmallScreen ? (
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {plans.map((plan) => (
                  <div key={plan.id} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className={`relative border-2 rounded-xl overflow-hidden transition-all duration-300 border-gray-200 hover:border-orange-300 ${
                        plan.popular ? "ring-2 ring-orange-400" : ""
                      }`}
                      variants={cardVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                          最人気プラン
                        </div>
                      )}

                      <div
                        className={`bg-white p-6 ${
                          plan.popular ? "pt-16" : ""
                        }`}
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                            <plan.icon className="w-8 h-8 text-orange-500" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                          {plan.name}
                        </h3>

                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-orange-500 mb-1">
                            {plan.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            {plan.duration}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                          {plan.description}
                        </p>

                        <div className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-start text-sm"
                            >
                              <span className="text-orange-500 mr-3 mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
                disabled={currentSlide === 0}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex space-x-2 items-center">
                {plans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
                disabled={currentSlide === plans.length - 1}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative border-2 rounded-xl overflow-hidden transition-all duration-300 border-gray-200 hover:border-orange-300 ${
                  plan.popular ? "ring-2 ring-orange-400" : ""
                }`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                    最人気プラン
                  </div>
                )}

                <div className={`bg-white p-6 ${plan.popular ? "pt-16" : ""}`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {plan.name}
                  </h3>

                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-500 mb-1">
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500">{plan.duration}</div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <span className="text-orange-500 mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(PlanSelectionSection);
