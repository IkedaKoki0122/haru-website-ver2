"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                ユタ留学、もっと自由に。もっと手軽に。
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700">充実のサポート内容</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 学校選び・出願書類サポート</li>
                    <li>• アパートの紹介・契約代行</li>
                    <li>• 空港送迎サービス</li>
                    <li>• ビザ申請サポート</li>
                    <li>• 現地生活のLINE相談対応（24時間）</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700">業界最安値</h4>
                  <div className="text-2xl font-bold text-blue-600">¥79,800</div>
                  <div className="text-xs text-gray-500">
                    他社平均¥400,000と比較して
                    <span className="text-red-500 font-semibold">¥320,200もお得！</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-700 font-medium mt-6">
              新しい環境での挑戦は不安もあると思いますが、<br />
              Utah Study Supportがあなたの夢の実現をお手伝いします。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}