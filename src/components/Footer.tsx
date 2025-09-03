"use client";
import Link from "next/link";
import { useMemo, memo, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const footerLinks = useMemo(() => ({
    service: [
      { href: "/about", label: "Utah Study Supportとは" },
      { href: "/courses", label: "コース・料金" },
      { href: "/schools", label: "スクールを探す" },
      { href: "/testimonials", label: "利用者の声" },
    ],
    support: [
      { href: "/qa", label: "Q&A" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/message", label: "メッセージ" },
    ],
    company: [
      { href: "/company", label: "会社情報" },
      { href: "/topics", label: "トピックス" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
      { href: "/legal", label: "法的事項" },
    ],
  }), []);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white" 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="text-2xl font-bold mb-4 block">
                Utah Study Support
              </Link>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              英語コーチングサービス<br />
              短期間で英語力を向上させる<br />
              個別指導プログラム
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link, index) => (
                <motion.li 
                  key={link.href}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link.href}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.href}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Utah Study Support. All rights reserved.
          </p>
          <motion.div 
            className="mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://line.me/R/ti/p/@your-line-id" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 font-medium text-sm transition-colors">
              無料カウンセリング
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default memo(Footer);