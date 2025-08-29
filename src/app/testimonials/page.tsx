"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback, memo, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion, useAnimation, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, parseInt(value), {
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.div ref={ref} className="text-4xl font-bold text-orange-500 mb-2">
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.div>
  );
};

function TestimonialsPage() {
  const testimonials = useMemo(() => [
    {
      name: "田中 太郎",
      job: "20代・商社勤務",
      period: "3ヶ月受講",
      score: "TOEIC 680 → 850点",
      image: "/testimonial1.jpg",
      comment: "Utah Study Support受講前は英語に自信がありませんでしたが、3ヶ月で劇的に変わりました。専属コンサルタントの方が毎日の学習をサポートしてくれたおかげで、継続することができました。特にビジネス英会話の実践練習が効果的で、今では海外の取引先との会議でも積極的に発言できるようになりました。"
    },
    {
      name: "佐藤 花子",
      job: "30代・IT企業",
      period: "3ヶ月受講",
      score: "TOEIC 720 → 900点",
      image: "/testimonial2.jpg",
      comment: "専属コンサルタントのサポートで効率的に学習できました。毎週の面談で学習計画を見直し、自分の弱点を重点的に克服することができました。仕事が忙しい中でも、隙間時間を活用した学習方法を教えてもらい、無理なく続けることができました。結果的にTOEICスコアが大幅に向上し、昇進にもつながりました。"
    },
    {
      name: "山田 次郎",
      job: "40代・金融業界",
      period: "3ヶ月受講",
      score: "TOEIC 600 → 780点",
      image: "/testimonial3.jpg",
      comment: "短期集中だからこそ結果が出せました。おすすめです。40代での転職を考えていた時に、英語力が必要だと感じてUtah Study Supportを受講しました。科学的なアプローチで効率的に学習でき、短期間で確実にスキルアップできました。今では外資系企業で働いています。"
    },
    {
      name: "鈴木 美咲",
      job: "30代・医療関係",
      period: "3ヶ月受講",
      score: "TOEIC 650 → 820点",
      image: "/testimonial4.jpg",
      comment: "仕事で英語が必要になり受講。今では会議で発言できるようになりました。医療現場での国際的なプロジェクトに参加することになり、急遽英語力を向上させる必要がありました。Utah Study Supportの集中的なプログラムのおかげで、専門用語も含めて英語でのコミュニケーションができるようになりました。"
    },
    {
      name: "高橋 健一",
      job: "20代・教育関係",
      period: "3ヶ月受講",
      score: "TOEIC 550 → 720点",
      image: "/testimonial5.jpg",
      comment: "毎日のコーチングサポートで学習習慣が身につきました。教師として生徒に英語を教える立場でありながら、自分の英語力に不安がありました。Utah Study Supportで基礎から体系的に学び直すことで、自信を持って授業ができるようになりました。生徒からの評価も向上しています。"
    },
    {
      name: "伊藤 雅子",
      job: "40代・製造業",
      period: "3ヶ月受講",
      score: "TOEIC 580 → 750点",
      image: "/testimonial6.jpg",
      comment: "海外出張での交渉が自信を持ってできるようになりました。製造業で海外工場との連携が重要な役割を担っていましたが、英語でのコミュニケーションが課題でした。Utah Study Supportで実践的なビジネス英語を学び、今では現地スタッフとも円滑にやり取りができています。"
    }
  ], []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => [
    { id: "all", name: "すべて" },
    { id: "business", name: "ビジネス" },
    { id: "toeic", name: "TOEIC" },
    { id: "career", name: "キャリア" }
  ], []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/testimonials" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              利用者の声
            </motion.h1>
            <motion.p 
              className="text-xl text-orange-100 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Utah Study Supportで英語力を向上させた受講生の生の声をお聞きください。
              短期集中で確実な成果を実感された方々の体験談をご紹介します。
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <motion.section 
          className="py-8 bg-gray-50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center space-x-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-orange-100 hover:shadow-md"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 1.2
                  }
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-orange-400">
                      <motion.svg 
                        className="w-16 h-16" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </motion.svg>
                    </div>
                  </motion.div>
                  <div className="p-6">
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.job}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-orange-500 font-medium">
                          {testimonial.period}
                        </span>
                        <motion.span 
                          className="text-sm text-green-600 font-bold"
                          whileHover={{ scale: 1.1 }}
                        >
                          {testimonial.score}
                        </motion.span>
                      </div>
                    </motion.div>
                    <motion.p 
                      className="text-sm text-gray-700 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      「{testimonial.comment}」
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                成果を実感する受講生の数字
              </h2>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.div 
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatedCounter value="98" suffix="%" />
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  受講継続率
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatedCounter value="150" suffix="点" />
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.7, duration: 0.5 }}
                >
                  平均TOEICスコアアップ
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatedCounter value="94" suffix="%" />
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.9, duration: 0.5 }}
                >
                  目標達成率
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatedCounter value="3" suffix="ヶ月" />
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 3.1, duration: 0.5 }}
                >
                  短期集中プログラム
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="w-full h-[250px] relative">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/helo2.webp"
                alt="Utah Study Support Background"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="max-w-4xl mx-auto px-6 text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  あなたも成功体験を手に入れませんか？
                </motion.h2>
                <motion.p 
                  className="text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  まずは無料カウンセリングで、あなたの英語学習の課題を分析し、
                  最適な学習プランをご提案いたします。
                </motion.p>
                <motion.button 
                  className="bg-orange-500 text-white px-10 py-3 rounded-full text-lg font-bold relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    今すぐ無料カウンセリングに申し込む
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-orange-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default memo(TestimonialsPage);