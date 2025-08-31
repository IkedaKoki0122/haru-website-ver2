"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const apartments = [
    { 
      name: "Cinnamon Tree Apartments", 
      location: "Provo",
      address: "1234 Elm Street, Salt Lake City, UT 84101",
      phone: "",
      hours: "月額 $850",
      access: "キャンパスまで徒歩15分",
      features: ["1ベッドルーム", "家具付き", "Wi-Fi完備", "ランドリー設備", "駐車場あり", "ジム併設"],
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
      name: "Rain Tree Apartments", 
      location: "Provo",
      address: "890 Main Street, Salt Lake City, UT 84111",
      phone: "",
      hours: "月額 $950",
      access: "キャンパスまでバス20分",
      features: ["1ベッドルーム", "モダンなデザイン", "Wi-Fi完備", "屋上テラス", "ペット可"],
      image: "/raintree.webp"
    }
  ];

  const [selectedApartment, setSelectedApartment] = useState(apartments[0]);

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
    <>
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            提携アパート紹介
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utah Study Supportが厳選した、ユタ州留学生活に最適なアパートをご紹介。
            安全で快適な住環境をお手頃価格で提供し、留学生活をトータルサポートいたします。
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-4 text-center mb-8"
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
                <div className="text-sm text-gray-600">{selectedApartment.hours}</div>
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

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button 
                className="flex-1 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 font-medium text-sm"
                whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Utah Study Supportに相談する
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="flex-1 block text-center border-2 border-orange-500 text-orange-500 py-3 rounded-md hover:bg-orange-500 hover:text-white font-medium text-sm transition-colors"
                >
                  詳細問い合わせ
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}