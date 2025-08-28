"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

export default function LP1() {
  const [vslAnalytics, setVslAnalytics] = useState(null);
  
  const heroRef = useRef(null);
  const problemsRef = useRef(null);
  const solutionRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const problemsInView = useInView(problemsRef, { once: true, margin: "-100px" });
  const solutionInView = useInView(solutionRef, { once: true, margin: "-100px" });
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
    console.log('LP1 VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/1" />
      <main>
        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day1-problem-recognition.mp4"
          title="なぜ90%の日本人が英会話で挫折するのか？"
          description="多くの人が知らない英会話挫折の真の原因を明かします"
          videoId="lp1-problem-recognition"
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                なぜ多くの日本人が
                <br />
                <span className="text-yellow-300">英会話</span>で挫折してしまうのか？
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                英会話を学び始めた90%の日本人が、
                <br />
                6ヶ月以内に諦めてしまう現実をご存知ですか？
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Problems Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={problemsRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={problemsInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                こんな悩みはありませんか？
              </motion.h2>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={problemsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100"
                variants={cardVariants}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">❌</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  何から始めれば英語が話せるようになるかわからない
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100"
                variants={cardVariants}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">❌</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  間違いを恐れて英語を話すことができない
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100"
                variants={cardVariants}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">❌</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  独学だと英会話の練習が続かない
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100"
                variants={cardVariants}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">❌</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  仕事で使える実践的な英会話力が身につかない
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100"
                variants={cardVariants}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">❌</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  ネイティブと自然に会話ができない
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Solution Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={solutionRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                実は、これらの問題には共通の原因があります
              </motion.h2>
            </div>
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto"
              variants={cardVariants}
            >
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
                多くの英会話学習者が挫折する理由は、
                <strong className="text-orange-500">「正しい学習メソッド」</strong>と
                <strong className="text-orange-500">「実践的な会話練習」</strong>が不足しているからです。
              </p>
              <p className="text-base md:text-lg text-gray-600 text-center">
                明日は、この問題を解決する革新的な英会話習得法についてお話しします。
              </p>
            </motion.div>
          </motion.div>
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
              className="text-lg md:text-xl mb-8 leading-relaxed"
              variants={itemVariants}
            >
              「なぜ一部の人だけが英会話をマスターできるのか？」
              <br />
              その秘密を公開します。
            </motion.p>
            <motion.div 
              className="bg-white text-orange-500 rounded-xl p-6 inline-block shadow-lg mb-6"
              variants={itemVariants}
            >
              <p className="text-base md:text-lg font-semibold">
                明日の配信をお見逃しなく！
              </p>
            </motion.div>
            <motion.button 
              className="bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold"
              variants={itemVariants}
            >
              <Link href="/lp/2">
                次のページを見る →
              </Link>
            </motion.button>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}