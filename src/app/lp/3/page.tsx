"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useState } from "react";

export default function LP3() {
  const [vslAnalytics, setVslAnalytics] = useState(null);
  
  const heroRef = useRef(null);
  const programRef = useRef(null);
  const curriculumRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const programInView = useInView(programRef, { once: true, margin: "-100px" });
  const curriculumInView = useInView(curriculumRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
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

  const handleAnalyticsUpdate = (analytics) => {
    setVslAnalytics(analytics);
    console.log('LP3 VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/3" />
      <main>
        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day3-product-introduction.mp4"
          title="革新的な英会話コーチングプログラムを初公開"
          description="英会話成功者のメソッドを体系化した、これまでにない英会話習得プログラムの全貌をお話しします"
          onAnalyticsUpdate={handleAnalyticsUpdate}
        />

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
                ついに公開！革新的な学習プログラム
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                これまでにない、成功者のメソッドを体系化した<br />プログラミング学習プログラムをご紹介します。
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Program Features Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={programRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={programInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                プロフェッショナル・コーディング・マスタープログラム
              </motion.h2>
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white mb-12 shadow-lg"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">このプログラムの特徴</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={cardVariants}>
                  <h4 className="text-lg font-semibold mb-2">🎯 完全個別指導</h4>
                  <p className="leading-relaxed">あなたの目標に合わせたオーダーメイドカリキュラム</p>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <h4 className="text-lg font-semibold mb-2">👨‍💻 現役エンジニアメンター</h4>
                  <p className="leading-relaxed">業界経験5年以上のプロフェッショナルが直接指導</p>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <h4 className="text-lg font-semibold mb-2">🔄 実践プロジェクト</h4>
                  <p className="leading-relaxed">ポートフォリオになる実際のWebアプリケーション開発</p>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <h4 className="text-lg font-semibold mb-2">💼 就職・転職サポート</h4>
                  <p className="leading-relaxed">履歴書作成から面接対策まで完全サポート</p>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </motion.section>

        {/* Curriculum Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={curriculumRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={curriculumInView ? "visible" : "hidden"}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                カリキュラム概要
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={curriculumInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <h4 className="text-xl font-bold text-orange-500 mb-4">Phase 1 (1-2ヶ月)</h4>
                <h5 className="font-semibold mb-4 text-gray-900">基礎固め</h5>
                <ul className="text-gray-600 space-y-2 leading-relaxed">
                  <li>• HTML/CSS完全マスター</li>
                  <li>• JavaScript基礎～応用</li>
                  <li>• Git/GitHub実践</li>
                  <li>• レスポンシブデザイン</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <h4 className="text-xl font-bold text-orange-500 mb-4">Phase 2 (3-4ヶ月)</h4>
                <h5 className="font-semibold mb-4 text-gray-900">フレームワーク習得</h5>
                <ul className="text-gray-600 space-y-2 leading-relaxed">
                  <li>• React完全マスター</li>
                  <li>• Next.js実践開発</li>
                  <li>• バックエンドAPI開発</li>
                  <li>• データベース設計</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <h4 className="text-xl font-bold text-orange-500 mb-4">Phase 3 (5-6ヶ月)</h4>
                <h5 className="font-semibold mb-4 text-gray-900">実践・就職準備</h5>
                <ul className="text-gray-600 space-y-2 leading-relaxed">
                  <li>• チーム開発経験</li>
                  <li>• ポートフォリオ作成</li>
                  <li>• 面接対策・企業紹介</li>
                  <li>• 継続的なキャリアサポート</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-16 bg-orange-50 overflow-hidden"
          ref={testimonialsRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                受講生の声
              </motion.h3>
            </motion.div>
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-8"
                variants={cardVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">山</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">山田さん（24歳）</h4>
                    <p className="text-sm text-orange-500">未経験からエンジニア転職成功</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  「他のスクールと違って、本当に個人に合わせてくれます。わからないことは24時間以内に回答してもらえるし、
                  実際の開発現場で使われている技術を学べるので、就職後もスムーズに業務に入れました。」
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-8"
                variants={cardVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">鈴</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">鈴木さん（32歳）</h4>
                    <p className="text-sm text-orange-500">フリーランスとして独立</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  「6ヶ月のプログラムを修了後、すぐにフリーランスとして案件を獲得できました。
                  メンターの方が案件獲得のコツまで教えてくれたので、今では月収50万円を安定して稼げています。」
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
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
              明日の予告
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              「なぜこのプログラムが他とは違うのか？」
              <br />
              実際の学習環境と他社との比較を公開します。
            </motion.p>
            <motion.div 
              className="bg-white text-orange-500 rounded-lg p-6 inline-block"
              variants={itemVariants}
            >
              <p className="text-lg font-bold">
                明日は、より詳しい内容をお伝えします。
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}