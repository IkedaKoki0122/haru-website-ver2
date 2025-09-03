"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const newsItems = [
    {
      date: "2024.01.15",
      title: "ユタ州の気候と留学生活の準備",
      summary: "四季がはっきりしているユタ州での留学生活に必要な服装や持ち物について詳しく解説します...",
    },
    {
      date: "2024.01.10",
      title: "BYU周辺のおすすめスポット10選",
      summary: "プロボ市内のBYU学生に人気のカフェ、レストラン、ショッピングエリアをご紹介...",
    },
    {
      date: "2024.01.05",
      title: "ユタ州留学の学生ビザ申請ガイド",
      summary: "F-1ビザ申請の手順と必要書類、面接対策まで完全網羅。初めての方でも安心...",
    },
    {
      date: "2024.01.02",
      title: "プロボの生活費と節約術",
      summary: "ユタ州プロボでの1ヶ月の生活費の目安と、留学生向けの節約テクニックを紹介...",
    },
    {
      date: "2023.12.28",
      title: "ユタ州の文化と宗教について",
      summary: "モルモン教の影響が強いユタ州の文化的特徴と、留学生として知っておくべきこと...",
    },
    {
      date: "2023.12.25",
      title: "語学学校選びの5つのポイント",
      summary: "UCEDA、Internexus、BYU ELCなど、各語学学校の特徴と選び方のコツを解説...",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
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
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お役立ちブログ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ユタ州留学に関する最新情報や現地生活のヒント、留学準備に役立つ情報をお届けします
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.slice(0, 6).map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="h-32 bg-gradient-to-br from-orange-100 to-orange-200"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  backgroundImage: "linear-gradient(to bottom right, rgb(254 215 170), rgb(251 146 60))",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              >
                <motion.div 
                  className="text-xs text-gray-500 mb-1"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.5 }}
                >
                  {item.date}
                </motion.div>
                
                <motion.h3 
                  className="text-sm font-medium text-gray-900 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-xs text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.9, duration: 0.5 }}
                >
                  {item.summary}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/topics">
            <motion.button 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              すべての記事を見る
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}