"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  const methodologyRef = useRef(null);
  const resultsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const methodologyInView = useInView(methodologyRef, { once: true, margin: "-100px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
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
      <Header currentPage="/about" />

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
                英語習得研究所とは
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                短期集中で英語力を確実に身につけるコーチングサービス
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={missionRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                私たちのミッション
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                英語習得研究所は「世界で活躍する日本人を増やす」をミッションに掲げ、
                <br />
                短期集中で英語力を確実に身につけるコーチングサービスを提供しています。
                <br />
                従来の英語学習の常識を覆し、科学的なアプローチで効率的な学習を実現します。
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={featuresRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                英語習得研究所の特徴
              </motion.h2>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/icon01.svg"
                    alt="科学的カリキュラム"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  科学的カリキュラム
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  応用言語学の理論に基づいた科学的アプローチで、効率的な英語習得を実現します。
                  一人ひとりの課題を明確にし、最適な学習法をご提案いたします。
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/icon02.svg"
                    alt="専属コンサルタント"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  専属コンサルタント
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  英語学習のプロフェッショナルが、受講生一人ひとりに寄り添い、
                  専用のカリキュラムで学習進捗を徹底的に管理・サポートします。
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/icon03.svg"
                    alt="継続サポート"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  継続サポート
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  毎日の学習管理から週次面談まで、挫折しない仕組みで学習継続をサポート。
                  習慣化まで徹底的にサポートします。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Methodology Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                英語習得研究所の学習メソッド
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  科学的根拠に基づく学習設計
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">課題発見と分析</h4>
                      <p className="text-gray-600">
                        科学的なテストで現在の英語力を詳細に分析し、課題を明確にします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">オーダーメイド学習設計</h4>
                      <p className="text-gray-600">
                        分析結果に基づき、一人ひとりに最適化された学習カリキュラムを設計します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">継続的な進捗管理</h4>
                      <p className="text-gray-600">
                        専属コンサルタントが毎日の学習をチェックし、必要に応じて軌道修正を行います。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="bg-gray-100 rounded-lg p-8"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    3ヶ月集中プログラム
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    短期集中だからこそ実現できる
                    <br />
                    確実な英語力向上
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Results Section */}
        <motion.section 
          className="py-16 bg-orange-50 overflow-hidden"
          ref={resultsRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                実績と成果
              </motion.h2>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">98%</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">継続率</h3>
                <p className="text-gray-600">
                  専属コンサルタントによる徹底サポートで高い継続率を実現
                </p>
              </motion.div>
              <motion.div 
                className="text-center bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">平均150点</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">TOEIC®スコアアップ</h3>
                <p className="text-gray-600">
                  3ヶ月でTOEIC®スコア平均150点アップを実現
                </p>
              </motion.div>
              <motion.div 
                className="text-center bg-white p-8 rounded-lg shadow-sm"
                variants={cardVariants}
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">10,000+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">受講生数</h3>
                <p className="text-gray-600">
                  これまで10,000名以上の受講生が英語力向上を実現
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
              まずは無料カウンセリングでお試しください
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
              <br />
              まずはお気軽にご相談ください。
            </motion.p>
            <motion.button 
              className="bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold"
              variants={itemVariants}
            >
              無料カウンセリングに申し込む
            </motion.button>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}