"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const apartments = [
    { 
      name: "Alta Apartments", 
      location: "Provo",
      address: "1850 N University Ave, Provo, UT 84604",
      phone: "",
      hours: "レギュラー: $415/月、アップグレード: $440/月",
      access: "ユーティリティ定額: $60/月、駐車場: $240/年",
      features: ["申込料: $50", "保証金: 家賃相当額（$115は不返金）", "入居前支払い: 初月+最終月家賃", "学期・空室状況で価格変動あり"],
      image: "/Alta.jpg"
    },
    { 
      name: "Glenwood Student Living", 
      location: "Provo",
      address: "1565 N University Ave, Provo, UT 84604",
      phone: "",
      hours: "$450〜/月",
      access: "BYUまで徒歩圏内",
      features: ["家具付き", "スマートTV", "高速インターネット", "24時間スタディルーム", "ジム", "プール・スパ", "駐車場$35〜"],
      image: "/Glenwood.jpeg"
    },
    { 
      name: "Cinnamon Tree Apartments", 
      location: "Provo",
      address: "1285 N Freedom Blvd, Provo, UT 84604",
      phone: "",
      hours: "3ベッドルーム/2バスルーム：$385/月（6人シェア）\n2ベッドルーム/1バスルーム：$430/月（4人）\n2ベッドルーム/2バスルーム：$460/月（4人）",
      access: "年中契約対応",
      features: ["ガス・電気実費負担", "インターネット $20/月", "保証金 $600", "築1966年・2階建・65戸"],
      image: "/CinnamonTreeApartments.webp"
    },
    { 
      name: "Alpine Village", 
      location: "Provo",
      address: "567 Alpine Drive, Salt Lake City, UT 84103",
      phone: "",
      hours: "月額 $720",
      access: "キャンパスまで徒歩10分",
      features: ["スタジオ", "家具付き", "Wi-Fi完備", "エアコン", "24時間セキュリティ"],
      image: "/Alpinevillage.webp"
    },
    { 
      name: "Raintree Apartments", 
      location: "Provo",
      address: "1849 N Freedom Blvd, Provo, UT 84604",
      phone: "",
      hours: "シェア $475/月、個室 $740/月",
      access: "学期スケジュール運営",
      features: ["家具付き", "高速インターネット", "プール", "学期契約対応"],
      image: "/raintree.webp"
    },
    { 
      name: "Stadium 150", 
      location: "Provo",
      address: "1960 N Canyon Rd, Provo, UT 84604",
      phone: "",
      hours: "シェア $415〜/月、個室 $690〜/月",
      access: "12か月契約",
      features: ["2BR/1BA", "3BR/1.5-2BA", "4BR/2BA", "ユーティリティ $82/月", "申込$50", "保証金$150", "ペット不可"],
      image: "/Studium.jpg"
    }
  ];

  const [selectedApartment, setSelectedApartment] = useState(apartments[0]);

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
            提携アパート紹介
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utah Study Supportが厳選した、ユタ州留学生活に最適なアパートをご紹介。
            安全で快適な住環境をお手頃価格で提供し、留学生活をトータルサポートいたします。
          </p>
        </motion.div>
        
        {/* Desktop Grid Layout */}
        <motion.div 
          className="hidden md:grid md:grid-cols-3 gap-4 text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {apartments.map((apartment, index) => (
            <motion.div 
              key={index} 
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                selectedApartment.name === apartment.name 
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
              onClick={() => setSelectedApartment(apartment)}
            >
              <motion.div 
                className={`font-medium text-sm ${
                  selectedApartment.name === apartment.name ? "text-orange-600" : "text-gray-900"
                }`}
              >
                {apartment.name}
              </motion.div>
              <div className="text-xs text-gray-600">
                {apartment.location}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider Layout */}
        <div className="md:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-4 px-1">
            {apartments.map((apartment, index) => (
              <motion.div 
                key={index}
                className={`flex-shrink-0 w-40 p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedApartment.name === apartment.name 
                    ? "border-orange-500 bg-orange-50 shadow-md" 
                    : "border-gray-100 hover:border-orange-200 hover:shadow-sm"
                }`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedApartment(apartment)}
              >
                <div 
                  className={`font-medium text-sm text-center ${
                    selectedApartment.name === apartment.name ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {apartment.name}
                </div>
                <div className="text-xs text-gray-600 text-center">
                  {apartment.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apartment Details */}
        <motion.div 
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          key={selectedApartment.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Apartment Image */}
          <div className="relative h-64 w-full mb-6">
            <Image
              src={selectedApartment.image}
              alt={selectedApartment.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedApartment.name}</h3>
                <div className="text-sm text-gray-500">{selectedApartment.location}</div>
              </div>
              <div className="text-sm text-orange-500 font-medium">
                {selectedApartment.access}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">所在地</div>
                  <div className="text-sm text-gray-600">{selectedApartment.address}</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">家賃</div>
                <div className="text-sm text-gray-600 whitespace-pre-line">{selectedApartment.hours}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-medium text-gray-700 mb-2">特徴</div>
              <div className="flex flex-wrap gap-2">
                {selectedApartment.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="inline-block bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <motion.a 
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 font-medium text-sm text-center block"
                whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="hidden md:inline">このアパートについてUtah Study Supportに相談する</span>
                <span className="md:hidden">Utah Study Supportに相談する</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}