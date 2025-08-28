"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp" />

      <main>
        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden"
          ref={heroRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6 py-20"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="text-center text-white">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                3ヶ月で英語力を劇的に向上
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8"
                variants={itemVariants}
              >
                専属コンサルタントによる完全個別指導で確実な成果をお約束
              </motion.p>
              <motion.button 
                className="bg-white text-orange-500 px-10 py-4 rounded-full hover:bg-gray-100 text-lg font-bold transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                今すぐ無料カウンセリングを予約
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={benefitsRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                なぜ英語習得研究所が選ばれるのか
              </motion.h2>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  科学的分析
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  応用言語学に基づく詳細な分析で、あなたの弱点を特定し最適な学習法を提案します。
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  専属コンサルタント
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  英語学習のプロがマンツーマンで徹底サポート。毎日の進捗管理と的確なアドバイスをお届けします。
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  確実な成果
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  98%の継続率と平均TOEIC®150点アップの実績。短期集中で確実な英語力向上を実現します。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={processRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                学習プロセス
              </motion.h2>
            </motion.div>
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="flex items-center bg-white p-6 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">無料カウンセリング・分析</h3>
                  <p className="text-gray-600">現在の英語力を詳細に分析し、目標設定と学習プランを作成します。</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center bg-white p-6 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">オーダーメイドカリキュラム作成</h3>
                  <p className="text-gray-600">分析結果に基づき、あなた専用の学習カリキュラムを設計します。</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center bg-white p-6 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3ヶ月集中学習</h3>
                  <p className="text-gray-600">専属コンサルタントによる毎日のサポートで確実に学習を継続します。</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonial Section */}
        <motion.section 
          className="py-16 bg-orange-50 overflow-hidden"
          ref={testimonialRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={testimonialInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                受講生の声
              </motion.h2>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
              variants={cardVariants}
              initial="hidden"
              animate={testimonialInView ? "visible" : "hidden"}
            >
              <div className="text-center">
                <div className="text-6xl text-orange-500 mb-4">"</div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  3ヶ月でTOEIC®スコアが200点アップしました！専属コンサルタントの方が毎日丁寧にサポートしてくださり、
                  挫折することなく継続できました。今では自信を持って英語でプレゼンができるようになりました。
                </p>
                <div className="font-bold text-gray-900">田中 美咲様（28歳・マーケティング職）</div>
                <div className="text-orange-500 font-semibold">TOEIC® 650点 → 850点</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={pricingRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                料金プラン
              </motion.h2>
            </motion.div>
            <motion.div 
              className="max-w-md mx-auto"
              variants={cardVariants}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-lg text-white text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">3ヶ月集中コース</h3>
                <div className="text-4xl font-bold mb-2">¥498,000</div>
                <div className="text-orange-100 mb-6">（税込）</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    専属コンサルタント
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    オーダーメイドカリキュラム
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    毎日の学習サポート
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    週次面談
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    学習アプリ使い放題
                  </li>
                </ul>
                <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 font-bold w-full transition-colors">
                  今すぐ申し込む
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden"
          ref={ctaRef}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              今すぐ英語力向上への第一歩を踏み出しませんか？
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              無料カウンセリングでは、あなたの英語学習の課題を詳しく分析し、
              <br />
              最適な学習プランを無料でご提案いたします。
            </motion.p>
            <motion.button 
              className="bg-white text-orange-500 px-10 py-4 rounded-full hover:bg-gray-100 text-lg font-bold transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              無料カウンセリングを予約する
            </motion.button>
            <motion.p 
              className="text-sm mt-4 text-orange-100"
              variants={itemVariants}
            >
              ※ カウンセリングは完全無料です。しつこい営業は一切ありません。
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}