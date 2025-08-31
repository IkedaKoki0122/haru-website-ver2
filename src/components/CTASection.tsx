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
      <div className="w-full h-[180px] relative">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/helo2.webp"
            alt="Utah Study Support Background"
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
              className="text-2xl font-bold mb-3"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              あなたのユタ留学を全力でサポートします
            </motion.h2>
            
            <motion.p 
              className="text-base mb-5"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              一緒に素晴らしいユタ留学の思い出を作りましょう
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-2.5 rounded-full hover:bg-orange-600 text-base font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LINEで相談する
              </motion.a>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;