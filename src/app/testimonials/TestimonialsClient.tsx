"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  job: string;
  period: string;
  score: string;
  image: string;
  comment: string;
}

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = "" }: AnimatedCounterProps) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, parseInt(value), {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.div ref={ref} className="text-4xl font-bold text-orange-500 mb-2">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
};

export default function TestimonialsClient() {
  const testimonials = useMemo(
    () => [
      {
        name: "田中 太郎",
        job: "22歳・大学生",
        period: "語学留学6ヶ月",
        score: "ソルトレイクシティ語学学校",
        image: "/testimonial1.jpg",
        comment:
          "Utah Study Supportのおかげで、理想的な留学生活を送ることができました。学校選びから入学手続き、ビザ申請まで全てサポートしていただき、不安なく渡米できました。現地でも困ったことがあればLINEですぐに相談でき、ホストファミリーとのトラブルも迅速に解決してもらえました。おかげで英語学習に集中でき、半年でTOEICスコアが200点以上アップしました。",
      },
      {
        name: "佐藤 花子",
        job: "28歳・会社員",
        period: "語学留学3ヶ月",
        score: "プロボ語学学校",
        image: "/testimonial2.jpg",
        comment:
          "キャリアアップのための短期留学でしたが、Utah Study Supportの手厚いサポートで充実した3ヶ月を過ごせました。学校選びでは、私のレベルと目標に合った学校を的確に提案していただき、ビジネス英語に特化したコースで学ぶことができました。現地での銀行口座開設や携帯電話の契約も手伝っていただき、生活面での不安が全くありませんでした。",
      },
      {
        name: "山田 次郎",
        job: "35歳・エンジニア",
        period: "専門留学1年",
        score: "ユタ大学付属語学学校",
        image: "/testimonial3.jpg",
        comment:
          "IT分野でのスキルアップを目指し、ユタ州への留学を決意しました。Utah Study Supportは、語学学校だけでなく、その後の大学院進学についてもアドバイスをくださいました。F-1ビザの申請書類作成から面接対策まで丁寧にサポートしていただき、無事にビザを取得できました。現地でのアパート探しも手伝っていただき、安心して勉強に専念できています。",
      },
      {
        name: "鈴木 美咲",
        job: "24歳・看護師",
        period: "語学留学9ヶ月",
        score: "オグデン語学学校",
        image: "/testimonial4.jpg",
        comment:
          "医療英語を学ぶために留学を決意しましたが、どこから始めればいいか分からず悩んでいました。Utah Study Supportの無料カウンセリングで、私の目標に最適な学校とプログラムを提案していただきました。現地での生活サポートも充実していて、病院での医療通訳の手配もしていただけたので、実践的な医療英語を学ぶ機会も得られました。",
      },
      {
        name: "高橋 健一",
        job: "19歳・高校卒業生",
        period: "大学進学準備1年",
        score: "ローガン語学学校",
        image: "/testimonial5.jpg",
        comment:
          "高校卒業後すぐにユタ州の大学進学を目指していましたが、英語力が不足していました。Utah Study Supportは語学学校での学習プランから、大学出願のサポートまで一貫して支援してくださいました。ホームステイ先も素晴らしい家庭を紹介していただき、アメリカの文化を肌で感じながら英語力を向上させることができました。来年からいよいよ大学生活が始まります！",
      },
      {
        name: "伊藤 雅子",
        job: "31歳・デザイナー",
        period: "語学留学4ヶ月",
        score: "パークシティ語学学校",
        image: "/testimonial6.jpg",
        comment:
          "デザイン業界で国際的に活躍したいと思い、英語力向上のために留学を決めました。Utah Study Supportは、私の予算と目標に合わせて最適な留学プランを提案してくださいました。学生ビザの申請では書類の書き方から面接練習まで何度も付き合っていただき、初めての留学でも安心して準備を進められました。現地でのネットワーキングイベントも紹介していただき、貴重な人脈も築けました。",
      },
    ],
    []
  );

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(
    () => [
      { id: "all", name: "すべて" },
      { id: "language", name: "語学留学" },
      { id: "university", name: "大学進学" },
      { id: "career", name: "キャリアアップ" },
    ],
    []
  );

  return (
    <>
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
            Utah Study
            Supportを利用してユタ州留学を実現された方々の体験談をご紹介します。
            学校選びから現地サポートまで、実際の利用者の声をお聞きください。
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
                  delayChildren: 1.2,
                },
              },
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
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
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
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
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
              留学生の満足度を表す数字
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
                  delayChildren: 0.3,
                },
              },
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
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <AnimatedCounter value="98" suffix="%" />
              <motion.div
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                利用者満足度
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
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <AnimatedCounter value="500" suffix="名+" />
              <motion.div
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.7, duration: 0.5 }}
              >
                累計留学生数
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
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <AnimatedCounter value="95" suffix="%" />
              <motion.div
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.9, duration: 0.5 }}
              >
                ビザ取得成功率
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
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <AnimatedCounter value="24" suffix="時間" />
              <motion.div
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3.1, duration: 0.5 }}
              >
                現地サポート対応
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
                あなたも理想の留学を実現しませんか？
              </motion.h2>
              <motion.p
                className="text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                まずは無料カウンセリングで、あなたの留学の目的や希望を伺い、
                最適な留学プランをご提案いたします。
              </motion.p>
              <motion.a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-10 py-3 rounded-full text-lg font-bold relative overflow-hidden group text-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)",
                  transition: { duration: 0.2 },
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
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


