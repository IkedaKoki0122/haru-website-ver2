"use client";
import Image from "next/image";
import { useState, useMemo, useCallback, memo, useRef, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface School {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  features?: string[];
}

function CoursesSection() {
  const schools: School[] = useMemo(() => [
    {
      id: "byuelc",
      title: "Brigham Young University English Language Center (BYUELC)",
      description: "BYU内にある語学学校で、美しいキャンパスと充実した設備で学習できます。世界中からの留学生との交流も豊富です。",
      location: "Provo, Utah",
      price: "月額 $1,300〜",
      features: [
        "BYUキャンパス内での学習",
        "少人数制クラス",
        "大学施設の利用可能",
        "アクティビティプログラム",
        "大学進学準備コース"
      ]
    },
    {
      id: "internexus",
      title: "InterNexus English Academy",
      description: "アットホームな環境で質の高い英語教育を提供する語学学校。少人数制クラスで個人のニーズに応じた丁寧な指導を行います。",
      location: "Salt Lake City, Utah",
      price: "月額 $1,300〜",
      features: [
        "少人数制クラス（平均8名）",
        "個別指導重視",
        "会話中心のカリキュラム",
        "ビジネス英語コース",
        "柔軟なスケジュール対応"
      ]
    },
    {
      id: "nomen",
      title: "Nomen Global Language Center",
      description: "革新的な学習方法と最新技術を組み合わせた語学学校。実用的な英語スキルの習得を重視し、国際的なコミュニティでの学習体験を提供します。",
      location: "Salt Lake City, Utah",
      price: "月額 $1,250〜",
      features: [
        "最新技術を活用した授業",
        "実践的なコミュニケーション重視",
        "グローバルな学習環境",
        "オンライン・オフライン融合型",
        "個別進度管理システム"
      ]
    },
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            提携語学学校紹介
          </h2>
          <p className="text-gray-600">
            ユタ州の厳選された語学学校をご紹介します。あなたの目標に合った最適な学校選びをサポートします。
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {schools.map((school) => (
            <motion.div 
              key={school.id} 
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">{school.title}キャンパス</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {school.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{school.location}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {school.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">特徴</h4>
                  <ul className="space-y-1">
                    {school.features?.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-orange-500 mb-4">
                  授業料: {school.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-gray-600 mb-6">
            学校選びでお悩みですか？専門スタッフが無料でご相談をお受けします。
          </p>
          <motion.button 
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            学校選び相談を申し込む
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CoursesSection);