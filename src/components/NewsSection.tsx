"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const newsItems = [
    {
      date: "2024.01.15",
      title: "新年度キャンペーン開始のお知らせ",
      summary: "新年度応援キャンペーンを開始いたします。詳細は...",
    },
    {
      date: "2024.01.10",
      title: "新校舎開校のお知らせ",
      summary: "この度、新たに渋谷校を開校いたします...",
    },
    {
      date: "2024.01.05",
      title: "年末年始休業のお知らせ",
      summary: "誠に勝手ながら、年末年始は下記の通り...",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            トピックス
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="h-32 bg-gradient-to-br from-orange-100 to-orange-200"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  backgroundImage: "linear-gradient(to bottom right, rgb(254 215 170), rgb(251 146 60))",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              >
                <motion.div 
                  className="text-xs text-gray-500 mb-1"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.5 }}
                >
                  {item.date}
                </motion.div>
                
                <motion.h3 
                  className="text-sm font-medium text-gray-900 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-xs text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.9, duration: 0.5 }}
                >
                  {item.summary}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}