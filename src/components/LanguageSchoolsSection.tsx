"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function LanguageSchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const schools = [
    { 
      name: "UCEDA School（Provo）", 
      location: "Provo",
      address: "Provo, UT",
      phone: "",
      hours: "$275/月",
      access: "プロボ市内",
      features: ["少人数制", "日常会話重視", "柔軟なスケジュール", "コストパフォーマンス抜群"],
      image: "/uceda.jpg"
    },
    { 
      name: "InterNexus English Academy", 
      location: "Salt Lake City, Utah",
      address: "Salt Lake City, Utah",
      phone: "",
      hours: "初セメスター：$2,100（$525/月）、書籍：約$160",
      access: "ソルトレイクシティ",
      features: ["少人数制クラス（平均8名）", "個別指導重視", "会話中心のカリキュラム", "ビジネス英語コース", "柔軟なスケジュール対応"],
      image: "/Internexus.webp"
    },
    { 
      name: "Brigham Young University (BYU) – English Language Center", 
      location: "Provo",
      address: "Provo, UT 84602",
      phone: "",
      hours: "$2,800/セメスター（$700/月）",
      access: "BYUキャンパス内",
      features: ["BYUキャンパス内での学習", "少人数制クラス", "大学施設の利用可能", "アクティビティプログラム", "大学進学準備コース", "I-20発行", "世界中からの留学生と交流"],
      image: "/BYUELC.webp"
    },
    { 
      name: "Lumos Language School", 
      location: "Orem",
      address: "930 S State St, Orem, UT 84097",
      phone: "+1 801-265-2345",
      hours: "初回学期：$2,100、継続：$1,800",
      access: "オレム市内",
      features: ["CEA認定校", "F-1ビザサポート", "7レベルCEFRカリキュラム", "集中英語プログラム", "TOEFL対策コース", "フレキシブルなスケジュール"],
      image: "/Lumos Language School.png"
    }
  ];

  const [selectedSchool, setSelectedSchool] = useState(schools[0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ユタ州プロボの提携語学学校
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ユタ州留学専門のUtah Study Supportが厳選した、プロボエリアの優良語学学校をご紹介。
            現地に精通したスタッフが、あなたの目標に最適な学校選びから入学手続きまで完全サポートいたします。
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-4 text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {schools.map((school, index) => (
            <motion.div 
              key={index} 
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 h-20 flex flex-col justify-center ${
                selectedSchool.name === school.name 
                  ? "border-orange-500 bg-orange-50 shadow-md" 
                  : "border-gray-100 hover:border-orange-200 hover:shadow-md"
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSchool(school)}
            >
              <motion.div 
                className={`font-medium text-sm mb-1 ${
                  selectedSchool.name === school.name ? "text-orange-600" : "text-gray-900"
                }`}
              >
                {school.name}
              </motion.div>
              <div className="text-xs text-gray-600">
                {school.location}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* School Details */}
        <motion.div 
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          key={selectedSchool.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* School Image */}
          <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
            <Image
              src={selectedSchool.image}
              alt={selectedSchool.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedSchool.name}</h3>
              <div className="text-sm text-gray-500">{selectedSchool.location}</div>
            </div>
            <div className="text-sm text-orange-500 font-medium">
              {selectedSchool.access}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">所在地</div>
                <div className="text-sm text-gray-600">{selectedSchool.address}</div>
              </div>
              {selectedSchool.phone && (
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">電話番号</div>
                  <div className="text-sm text-gray-600">{selectedSchool.phone}</div>
                </div>
              )}
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">学費</div>
              <div className="text-sm text-gray-600">{selectedSchool.hours}</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium text-gray-700 mb-2">特徴</div>
            <div className="flex flex-wrap gap-2">
              {selectedSchool.features.map((feature, featureIndex) => (
                <span 
                  key={featureIndex}
                  className="inline-block bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <motion.a 
              href="https://line.me/R/ti/p/@your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 font-medium text-sm text-center block"
              whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              無料相談を予約する
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}