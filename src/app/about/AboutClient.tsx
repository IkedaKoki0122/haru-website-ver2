"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutClient() {
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
      opacity: 1
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
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
              Utah Study Supportとは
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              variants={itemVariants}
            >
              ユタ州専門の留学斡旋サービスで、あなたの海外留学を完全サポート
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
              Utah Study Supportは「世界で活躍する日本人を増やす」をミッションに掲げ、
              <br />
              ユタ州の優れた教育環境と豊かな自然を活かした留学体験を提供しています。
              <br />
              学校選びから現地サポートまで、お客様一人ひとりに寄り添った総合的な留学支援を実現します。
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
              Utah Study Supportの特徴
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
                学校選定サポート
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                ユタ州の優良語学学校・大学との強固なネットワークを活かし、
                あなたの目標と予算に最適な教育機関をご提案いたします。
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
                現地生活サポート
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                住居手配から空港ピックアップ、銀行口座開設まで、
                ユタ州での新生活に必要な手続きを専門スタッフが全面サポートします。
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
                24時間緊急対応
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                留学期間中の緊急事態やトラブルに24時間対応。
                現地スタッフとの連携で、安心・安全な留学生活をサポートします。
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
              Utah Study Supportの留学サポートプロセス
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                完全オーダーメイド留学プラン
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">留学目標のヒアリング</h4>
                    <p className="text-gray-600">
                      あなたの将来ビジョン、予算、学習期間を詳しくお伺いし、最適な留学プランを設計します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">学校選定・手続きサポート</h4>
                    <p className="text-gray-600">
                      ユタ州の推薦学校から最適な教育機関を選定し、入学手続きを全面サポートします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">現地安心サポート</h4>
                    <p className="text-gray-600">
                      入国から卒業まで、現地スタッフが継続的にサポート。学習相談や生活サポートを提供します。
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
                  留学成功率
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  従来の留学代理店とは一味違う
                  <br />
                  ユタ州特化の手厚いサポート
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
              <div className="text-4xl font-bold text-orange-500 mb-4">95%</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">留学満足度</h3>
              <p className="text-gray-600">
                ユタ州特化の手厚いサポートで高い満足度を実現
              </p>
            </motion.div>
            <motion.div 
              className="text-center bg-white p-8 rounded-lg shadow-sm"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-orange-500 mb-4">200+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">提携学校数</h3>
              <p className="text-gray-600">
                ユタ州内の優良な語学学校・大学との強固なパートナーシップ
              </p>
            </motion.div>
            <motion.div 
              className="text-center bg-white p-8 rounded-lg shadow-sm"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-orange-500 mb-4">1,500+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">留学成功例</h3>
              <p className="text-gray-600">
                これまで1,500名以上の日本人留学生のユタ州留学をサポート
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
            ユタ州留学の第一歩を踏み出しましょう
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            ユタ州専門カウンセラーが、あなたに最適な留学プランを無料で提案いたします。
            <br />
            まずはお気軽にご相談ください。
          </motion.p>
          <motion.a 
            href="https://line.me/R/ti/p/@your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold text-center"
            variants={itemVariants}
          >
            無料カウンセリングに申し込む
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}