"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          ユタ州で理想の留学生活を実現しませんか？
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          ユタ州専門カウンセラーがあなたの留学プランを無料でサポートします
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.a 
            href="https://line.me/R/ti/p/@your-line-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 text-lg font-bold"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            無料カウンセリングに申し込む
          </motion.a>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-orange-500 text-lg font-bold transition-colors"
            >
              サービス詳細を見る
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}