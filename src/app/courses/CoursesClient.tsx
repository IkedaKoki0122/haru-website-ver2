"use client";
import Image from "next/image";
import { useMemo, memo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function CoursesClient() {
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleEnrollment = (courseId: string) => {
    // Redirect to contact page with course information
    const params = new URLSearchParams({ course: courseId });
    window.location.href = `/contact?${params.toString()}`;
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const courses = useMemo(
    () => [
      {
        id: "basic",
        name: "ベーシックプラン",
        price: "¥49,800",
        duration: "3ヶ月",
        description:
          "英語学習を始めたばかりの方に最適な入門プランです。基礎からしっかりサポートします。",
        features: [
          "月2回のオンライン個別指導",
          "基礎文法・語彙学習サポート",
          "学習計画の作成",
          "進捗レポート月次提供",
          "メールサポート",
          "基本教材提供",
        ],
        icon: SchoolIcon,
      },
      {
        id: "medium",
        name: "ミディアムプラン",
        price: "¥79,800",
        duration: "6ヶ月",
        description:
          "着実にレベルアップを目指す方向けの標準プランです。バランスの良い学習を提供します。",
        features: [
          "学校選び・出願サポート",
          "アパート紹介・契約代行",
          "空港送迎サービス",
          "24時間LINE相談対応",
        ],
        popular: true,
        icon: RocketLaunchIcon,
      },
      {
        id: "premium",
        name: "プレミアムプラン",
        price: "¥129,800",
        duration: "12ヶ月",
        description:
          "本格的に英語力を向上させたい方向けの最上級プランです。完全カスタマイズ指導を提供します。",
        features: [
          "月4回のオンライン個別指導",
          "文法・語彙・会話総合サポート",
          "学習計画の作成・管理",
          "進捗レポート月次提供",
          "24時間チャットサポート",
          "教材・テキスト提供",
          "渡米後の英会話コーチング",
          "渡米後一週間のサービス・買い物サポート",
        ],
        icon: WorkspacePremiumIcon,
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className={`relative border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedCourse === course.id
                  ? "border-orange-500 shadow-lg"
                  : "border-gray-200 hover:border-orange-300"
              } ${course.popular ? "ring-2 ring-orange-400" : ""}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleCourseSelect(course.id)}
            >
              {course.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                  最人気プラン
                </div>
              )}

              <div className={`bg-white p-6 ${course.popular ? "pt-16" : ""}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <course.icon className="w-8 h-8 text-orange-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {course.name}
                </h3>

                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">
                    {course.price}
                  </div>
                  <div className="text-sm text-gray-500">{course.duration}</div>
                </div>

                <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <span className="text-orange-500 mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCourse === course.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnrollment(course.id);
                  }}
                >
                  {selectedCourse === course.id ? "選択中" : "プランを選択"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedCourse && (
          <motion.div
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-6 text-lg">
              {courses.find((p) => p.id === selectedCourse)?.name}
              が選択されています。
              <br />
              無料カウンセリングでより詳しいご相談を承ります。
            </p>
            <motion.a
              href="https://line.me/R/ti/p/@your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 font-medium text-lg transition-all duration-300 shadow-lg text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              無料カウンセリングを申し込む
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(CoursesClient);
