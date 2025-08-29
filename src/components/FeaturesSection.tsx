"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="py-16 bg-orange-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Utah Study Supportが選ばれる3つの理由
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-4"
              variants={iconVariants}
            >
              <Image
                src="/icon01.svg"
                alt="業界最安値79,800円"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              業界最安値79,800円
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              他社と比べて32万円以上もお得！充実したサポート内容を業界最安値でご提供します。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-4"
              variants={iconVariants}
            >
              <Image
                src="/icon02.svg"
                alt="トータルサポート"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              トータルサポート
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              学校選びから現地生活まで、ユタ留学に必要なすべてのサービスをワンストップで提供します。
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-4"
              variants={iconVariants}
            >
              <Image
                src="/icon03.svg"
                alt="24時間LINE相談"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              24時間LINE相談
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              留学中の疑問や困りごとにLINEで24時間対応。日本語でいつでも相談できるので安心です。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}