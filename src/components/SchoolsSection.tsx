"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const schools = [
    { name: "新宿校", location: "東京" },
    { name: "渋谷校", location: "東京" },
    { name: "池袋校", location: "東京" },
    { name: "神田秋葉原校", location: "東京" },
    { name: "有楽町校", location: "東京" },
    { name: "横浜校", location: "神奈川" },
  ];

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
            スクール一覧
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {schools.map((school, index) => (
            <motion.div 
              key={index} 
              className="p-4 border border-gray-100 rounded-lg hover:border-orange-200 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: "rgb(251 146 60)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="font-medium text-sm text-gray-900"
                whileHover={{ color: "rgb(251 146 60)" }}
              >
                {school.name}
              </motion.div>
              <div className="text-xs text-gray-600">
                {school.location}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}