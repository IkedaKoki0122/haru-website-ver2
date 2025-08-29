"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const schools = [
    { 
      name: "Brigham Young University English Language Center (BYUELC)", 
      location: "Provo, Utah",
      address: "BYU Campus, Provo, Utah",
      phone: "",
      hours: "月額 $1,300〜",
      access: "BYUキャンパス内",
      features: ["少人数制クラス", "大学施設の利用可能", "アクティビティプログラム", "大学進学準備コース"]
    },
    { 
      name: "InterNexus English Academy", 
      location: "Salt Lake City, Utah",
      address: "Salt Lake City, Utah",
      phone: "",
      hours: "月額 $1,300〜",
      access: "アットホームな環境",
      features: ["少人数制クラス（平均8名）", "個別指導重視", "会話中心のカリキュラム", "ビジネス英語コース", "柔軟なスケジュール対応"]
    },
    { 
      name: "Nomen Global Language Center", 
      location: "Salt Lake City, Utah",
      address: "Salt Lake City, Utah",
      phone: "",
      hours: "月額 $1,250〜",
      access: "革新的な学習方法",
      features: ["最新技術を活用した授業", "実践的なコミュニケーション重視", "グローバルな学習環境", "オンライン・オフライン融合型", "個別進度管理システム"]
    }
  ];

  const [selectedSchool, setSelectedSchool] = useState(schools[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            提携語学学校紹介
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ユタ州の厳選された語学学校をご紹介します。あなたの目標に合った最適な学校選びをサポートします。
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
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
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
                className={`font-medium text-sm ${
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
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">授業料</div>
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
            <motion.button 
              className="flex-1 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 font-medium text-sm"
              whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              学校選び相談を申し込む
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}