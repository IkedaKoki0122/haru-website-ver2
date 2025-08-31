"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
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

  return (
    <section className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Utah Study Supportとは
          </motion.h2>
          <motion.div 
            className="text-gray-600 max-w-5xl mx-auto space-y-4"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">
              Utah Study Supportは、ユタ州への留学をトータルサポート。
              <br />
              学校選びから現地生活まで、あなたの留学の夢を実現します。
            </p>
            
            <div className="bg-orange-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FF6900' }}>
                ユタ留学、もっと自由に。もっと手軽に。
              </h3>
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-gray-800">業界最安値</h4>
                <div className="text-6xl font-bold" style={{ color: '#FF6900' }}>¥79,800</div>
                <div className="text-lg text-black">
                  他社平均¥400,000と比較して
                  <span className="block text-2xl text-black font-bold mt-2">¥320,200もお得！</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-700 font-medium mt-6">
              新しい環境での挑戦は不安もあると思いますが、<br />
              Utah Study Supportがあなたの夢の実現をお手伝いします。
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              variants={itemVariants}
            >
              <Link
                href="/courses"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 font-medium transition-colors"
              >
                コース詳細を見る
              </Link>
              <Link
                href="/testimonials"
                className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white font-medium transition-colors"
              >
                体験談を読む
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}