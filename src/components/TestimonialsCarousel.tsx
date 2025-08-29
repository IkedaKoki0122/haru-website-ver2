"use client";
import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  job: string;
  comment: string;
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const originalCards: Testimonial[] = useMemo(() => [
    {
      name: "Aさん",
      job: "20代・商社",
      comment:
        "Utah Study Support受講前は英語に自信がありませんでしたが、3ヶ月で劇的に変わりました。",
    },
    {
      name: "Bさん",
      job: "30代・IT",
      comment: "専属コンサルタントのサポートで効率的に学習できました。",
    },
    {
      name: "Cさん",
      job: "40代・金融",
      comment: "短期集中だからこそ結果が出せました。おすすめです。",
    },
    {
      name: "Dさん",
      job: "30代・医療",
      comment:
        "仕事で英語が必要になり受講。今では会議で発言できるようになりました。",
    },
    {
      name: "Eさん",
      job: "20代・教育",
      comment: "毎日のコーチングサポートで学習習慣が身につきました。",
    },
    {
      name: "Fさん",
      job: "40代・製造業",
      comment: "海外出張での交渉が自信を持ってできるようになりました。",
    },
  ], []);

  const cards = originalCards;

  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 288;
    const width = window.innerWidth;
    if (width >= 1536) return 432 + 24;
    if (width >= 1280) return 360 + 24;
    if (width >= 1024) return 312 + 24;
    if (width >= 768) return 264 + 24;
    if (width >= 640) return 240 + 24;
    return 216 + 24;
  }, []);

  const [cardWidth, setCardWidth] = useState(() => getCardWidth());

  const handleNext = useCallback(() => {
    if (isTransitioning || !scrollContainerRef.current) return;

    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1 >= originalCards.length ? 0 : prevIndex + 1;
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: "smooth",
        });
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      
      return newIndex;
    });
  }, [isTransitioning, cardWidth, originalCards.length]);

  useEffect(() => {
    const handleResize = () => {
      const newCardWidth = getCardWidth();
      setCardWidth(newCardWidth);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "auto",
        });
        setCurrentIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getCardWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1 >= originalCards.length ? 0 : prevIndex + 1;
          
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              left: newIndex * cardWidth,
              behavior: "smooth",
            });
          }
          
          setIsTransitioning(true);
          setTimeout(() => setIsTransitioning(false), 300);
          
          return newIndex;
        });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isTransitioning, cardWidth, originalCards.length]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning || !scrollContainerRef.current) return;

    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1 < 0 ? originalCards.length - 1 : prevIndex - 1;
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: "smooth",
        });
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      
      return newIndex;
    });
  }, [isTransitioning, cardWidth, originalCards.length]);


  return (
    <section 
      className="pt-8 pb-12" 
      style={{ backgroundColor: "#242424" }}
      role="region"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6">
        <h2 id="testimonials-heading" className="sr-only">受講生の声</h2>
        <div className="relative -mt-16 z-10">
          <motion.button
            onClick={handlePrevious}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="前の口コミを表示"
            type="button"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="次の口コミを表示"
            type="button"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide transition-transform duration-500 ease-in-out"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
              role="group"
              aria-live="polite"
              aria-label={`${originalCards.length}件の口コミ、現在${currentIndex + 1}件目を表示中`}
            >
              {cards.map((card, index) => (
                <div
                  key={`${card.name}-${index}`}
                  className="relative w-[216px] sm:w-[240px] md:w-[264px] lg:w-[312px] xl:w-[360px] 2xl:w-[432px]
                             flex-shrink-0"
                  style={{ 
                    scrollSnapAlign: "start",
                    border: "2px solid #E7910A"
                  }}
                >
                  <motion.div
                    className="bg-white shadow-sm overflow-hidden w-full h-full"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1}件目の口コミ: ${card.name}さん（${card.job}）`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <motion.div 
                      className="aspect-[2/1] bg-gradient-to-br from-orange-100 to-orange-200"
                    />
                    <div className="p-4">
                      <motion.div 
                        className="mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="font-medium text-sm">{card.name}</div>
                        <div className="text-xs text-gray-500">
                          {card.job}
                        </div>
                      </motion.div>
                      <motion.p 
                        className="text-sm text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        「{card.comment}」
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsCarousel);