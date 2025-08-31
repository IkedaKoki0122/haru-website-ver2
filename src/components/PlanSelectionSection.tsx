"use client";
import { useState, useMemo, memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

function PlanSelectionSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = useMemo(() => [
    {
      id: "basic",
      name: "ベーシックプラン",
      price: "¥49,800",
      duration: "3ヶ月",
      description: "語学学校選びをサポートする基本プランです。学校紹介と申請チェックを行います。",
      features: [
        "語学学校の紹介・選定サポート",
        "学校情報の詳細提供",
        "入学手続きのガイダンス",
        "申請書類のチェック・添削",
        "メールサポート",
        "※アプリケーション手続きはご自身で実施"
      ],
      icon: "icon-basic.svg"
    },
    {
      id: "medium",
      name: "ミディアムプラン", 
      price: "¥79,800",
      duration: "6ヶ月",
      description: "留学準備から現地生活まで総合的にサポートする充実プランです。",
      features: [
        "学校選び・出願サポート",
        "アパート紹介・契約代行",
        "空港送迎サービス",
        "ビザ申請サポート",
        "24時間LINE相談対応"
      ],
      popular: true,
      icon: "icon-medium.svg"
    },
    {
      id: "premium", 
      name: "プレミアムプラン",
      price: "¥129,800", 
      duration: "12ヶ月",
      description: "本格的に英語力を向上させたい方向けの最上級プランです。完全カスタマイズ指導を提供します。",
      features: [
        "月8回のオンライン個別指導",
        "完全カスタマイズカリキュラム",
        "4技能総合強化プログラム",
        "週次進捗レポート・分析",
        "24時間優先サポート",
        "全教材・特別コンテンツ提供"
      ],
      icon: "icon-premium.svg"
    }
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
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

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            あなたに最適な学習プランを選択
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            目標やレベルに合わせた3つのプランをご用意。専門講師による個別指導で確実にスキルアップを実現します。
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`relative border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id 
                  ? 'border-orange-500 shadow-lg' 
                  : 'border-gray-200 hover:border-orange-300'
              } ${plan.popular ? 'ring-2 ring-orange-400' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                  最人気プラン
                </div>
              )}
              
              <div className={`bg-white p-6 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <img 
                      src={`/${plan.icon}`} 
                      alt={plan.name}
                      className="w-8 h-8"
                    />
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
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <span className="text-orange-500 mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedPlan === plan.id ? '選択中' : 'プランを選択'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {selectedPlan && (
          <motion.div 
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-6 text-lg">
              {plans.find(p => p.id === selectedPlan)?.name}が選択されています。
              <br />
              無料カウンセリングでより詳しいご相談を承ります。
            </p>
            <motion.a 
              href="https://line.me/R/ti/p/@your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 font-medium text-lg transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              無料カウンセリングを申し込む
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(PlanSelectionSection);