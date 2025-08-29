"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  currentPage?: string;
}

function Header({ currentPage }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = useMemo(() => [
    { href: "/about", label: "Utah Study Supportとは" },
    { href: "/courses", label: "コース・料金" },
    { href: "/topics", label: "トピックス" },
    { href: "/testimonials", label: "利用者の声" },
    { href: "/schools", label: "スクールを探す" },
    { href: "/qa", label: "Q&A" },
    { href: "/company", label: "会社情報" },
  ], []);

  const isActive = useCallback((href: string) => {
    if (currentPage) {
      return currentPage === href;
    }
    return pathname === href;
  }, [currentPage, pathname]);

  return (
    <motion.header 
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="flex items-center"
                whileHover={{ 
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative mr-3">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300"
                  >
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                    <rect width="32" height="32" rx="8" fill="url(#logoGradient)" />
                    <path 
                      d="M8 12h12M8 16h8M8 20h10" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      className="group-hover:stroke-gray-100 transition-colors duration-300"
                    />
                    <circle cx="24" cy="12" r="2" fill="white" className="group-hover:fill-gray-100 transition-colors duration-300" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900 leading-tight tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                    Utah Study Support
                  </span>
                  <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                    English Institute
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          <motion.nav 
            className="hidden lg:flex items-center space-x-6" 
            role="navigation" 
            aria-label="メインナビゲーション"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navigationItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative ${
                      active
                        ? "text-orange-500 hover:text-orange-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <motion.span
                      className="block truncate"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      title={item.label}
                    >
                      {item.label}
                    </motion.span>
                    {active && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                        layoutId="activeIndicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div 
            className="flex items-center space-x-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/counseling" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 font-medium text-sm hidden lg:block transition-colors">
                無料カウンセリング
              </Link>
            </motion.div>
            
            <motion.button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMobileMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.path 
                      key="close"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.path 
                      key="menu"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </svg>
            </motion.button>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="lg:hidden bg-white border-t" 
              role="navigation" 
              aria-label="モバイルナビゲーション"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div 
                className="px-4 py-4 space-y-3"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {navigationItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`block text-base font-medium ${
                          active
                            ? "text-orange-500 hover:text-orange-600"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: navigationItems.length * 0.05,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <Link href="/counseling" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 font-medium text-base w-full mt-4 text-center transition-colors">
                    無料カウンセリング
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default memo(Header);
