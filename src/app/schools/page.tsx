"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Schools() {
  const schools = [
    {
      name: "新宿校",
      area: "東京",
      address: "〒160-0022 東京都新宿区新宿3-38-1 ルミネエスト新宿店8F",
      phone: "03-6279-4312",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR新宿駅東口徒歩1分",
      features: ["完全個室", "自習室完備", "コンサルタント常駐"]
    },
    {
      name: "渋谷校",
      area: "東京",
      address: "〒150-0043 東京都渋谷区道玄坂1-2-3 渋谷フクラス17F",
      phone: "03-6427-5207",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR渋谷駅西口徒歩3分",
      features: ["最新設備", "景観良好", "アクセス抜群"]
    },
    {
      name: "池袋校",
      area: "東京",
      address: "〒171-0021 東京都豊島区西池袋1-11-1 ルミネ池袋8F",
      phone: "03-5904-8010",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR池袋駅西口徒歩1分",
      features: ["駅直結", "静かな環境", "集中学習"]
    },
    {
      name: "神田秋葉原校",
      area: "東京",
      address: "〒101-0021 東京都千代田区外神田1-18-13 秋葉原ダイビル8F",
      phone: "03-6206-9871",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR秋葉原駅電気街口徒歩4分",
      features: ["落ち着いた雰囲気", "IT関連企業多数", "ビジネス街"]
    },
    {
      name: "有楽町校",
      area: "東京",
      address: "〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館10F",
      phone: "03-6259-1374",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR有楽町駅京橋口徒歩1分",
      features: ["銀座至近", "ビジネス中心地", "充実施設"]
    },
    {
      name: "横浜校",
      area: "神奈川",
      address: "〒220-0004 神奈川県横浜市西区北幸2-1-22 ナガオカビル7F",
      phone: "045-548-8450",
      hours: "平日 10:00-21:00 / 土日祝 9:30-18:00",
      access: "JR横浜駅西口徒歩5分",
      features: ["横浜エリア唯一", "交通便利", "関内アクセス良好"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/schools" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            スクール一覧
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            全国に展開するUtah Study Supportスクールからお近くの校舎をお選びください。
            <br />
            どの校舎も最高品質の英語コーチングサービスを提供しています。
          </motion.p>
        </motion.div>

        {/* Schools Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {schools.map((school, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.8 + index * 0.15,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{school.name}</h2>
                  <div className="text-sm text-gray-500">{school.area}</div>
                </div>
                <div className="text-sm text-orange-500 font-medium">
                  {school.access}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">住所</div>
                  <div className="text-sm text-gray-600">{school.address}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">電話番号</div>
                  <div className="text-sm text-gray-600">{school.phone}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">営業時間</div>
                  <div className="text-sm text-gray-600">{school.hours}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">特徴</div>
                <div className="flex flex-wrap gap-2">
                  {school.features.map((feature, featureIndex) => (
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
                  className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 font-medium text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  無料カウンセリング予約
                </motion.button>
                <motion.button 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  詳細
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
          >
            お近くの校舎が見つからない場合
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
          >
            オンラインでも同様の高品質なコーチングサービスを受けることができます。
            <br />
            まずはお気軽にお問い合わせください。
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium"
              >
                お問い合わせ
              </Link>
            </motion.div>
            <motion.button 
              className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 font-medium"
              whileHover={{ scale: 1.05, y: -3, backgroundColor: "#fff7ed" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              オンライン受講について
            </motion.button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}