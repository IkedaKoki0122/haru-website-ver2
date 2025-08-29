"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, memo } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Topics() {
  const newsItems = useMemo(() => [
    {
      id: 1,
      date: "2024.08.15",
      title: "夏季集中プログラム受付開始のお知らせ",
      excerpt: "この夏、英語力を一気に向上させませんか？夏季限定の集中プログラムの受付を開始いたします。",
      category: "お知らせ",
      image: "/news-01.jpg"
    },
    {
      id: 2,
      date: "2024.08.10",
      title: "新講師陣紹介：グローバル企業出身のプロフェッショナル",
      excerpt: "世界的な企業での豊富な経験を持つ新しい講師陣が加わりました。実践的なビジネス英語をお教えします。",
      category: "講師紹介",
      image: "/news-02.jpg"
    },
    {
      id: 3,
      date: "2024.08.05",
      title: "TOEIC平均スコア向上率95%達成",
      excerpt: "受講生のTOEICスコア向上率が過去最高を記録しました。科学的メソッドの効果が実証されています。",
      category: "実績",
      image: "/news-03.jpg"
    },
    {
      id: 4,
      date: "2024.07.30",
      title: "オンライン受講システムのアップデート完了",
      excerpt: "より使いやすく、より効果的な学習環境を提供するため、オンラインシステムを大幅にアップデートしました。",
      category: "システム",
      image: "/news-04.jpg"
    },
    {
      id: 5,
      date: "2024.07.25",
      title: "受講生インタビュー：外資系転職成功事例",
      excerpt: "Utah Study Supportで英語力を身につけ、念願の外資系企業への転職を成功させた受講生のインタビューをお届けします。",
      category: "受講生の声",
      image: "/news-05.jpg"
    },
    {
      id: 6,
      date: "2024.07.20",
      title: "新校舎開校予定：大阪梅田校",
      excerpt: "関西エリアでのサービス拡充の一環として、大阪梅田に新しい校舎を開校予定です。",
      category: "お知らせ",
      image: "/news-06.jpg"
    },
    {
      id: 7,
      date: "2024.07.15",
      title: "英語学習効果を最大化する新メソッド発表",
      excerpt: "最新の脳科学研究に基づく新しい学習メソッドを開発しました。学習効率が従来比20%向上します。",
      category: "メソッド",
      image: "/news-07.jpg"
    },
    {
      id: 8,
      date: "2024.07.10",
      title: "企業研修プログラム導入企業100社突破",
      excerpt: "多くの企業様にご利用いただいている企業研修プログラムの導入企業数が100社を突破しました。",
      category: "実績",
      image: "/news-08.jpg"
    }
  ], []);

  const categories = useMemo(() => ["すべて", "お知らせ", "講師紹介", "実績", "システム", "受講生の声", "メソッド"], []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/topics" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              トピックス
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Utah Study Supportの最新情報・お知らせをお届けします
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <motion.section 
          className="py-8 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "すべて"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut", 
                    delay: 0.6 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* News List */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: 1.0 + index * 0.1 
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">画像準備中</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <Link
                        href={`/topics/${item.id}`}
                        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
                      >
                        続きを読む
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
            >
              <nav className="flex items-center space-x-2">
                <motion.button 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="px-4 py-2 bg-orange-500 text-white rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>
                <span className="px-2 text-gray-500">...</span>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  10
                </motion.button>
                <motion.button 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </nav>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
        >
          <div className="w-full h-[250px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
                >
                  無料カウンセリング実施中
                </motion.h2>
                <motion.p 
                  className="text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.9 }}
                >
                  あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
                </motion.p>
                <motion.button 
                  className="bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  今すぐ申し込む
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default memo(Topics);