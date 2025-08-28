"use client";
import Image from "next/image";
import Link from "next/link";
import { type FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTASection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="w-full h-[250px] relative">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/helo2.webp"
            alt="英語習得研究所 Background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-6"
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              無料カウンセリング実施中
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link 
                href="/counseling" 
                className="inline-block bg-orange-500 text-white px-10 py-3 rounded-full hover:bg-orange-600 text-lg font-bold"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  今すぐ申し込む
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;