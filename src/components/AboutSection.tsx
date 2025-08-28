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
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            英語習得研究所とは
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            短期集中で英語力を確実に身につけるコーチングサービスです。
            <br />
            英語学習のプロフェッショナルが、あなた専用のカリキュラムで学習をサポートし、
            <br />
            本気で英語と向き合う3ヶ月をお約束します。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}