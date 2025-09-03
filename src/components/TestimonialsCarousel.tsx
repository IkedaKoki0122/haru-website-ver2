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
      name: "田中さん",
      job: "大学生・BYU留学",
      comment:
        "Utah Study Supportのおかげで語学学校選びからアパート探しまで全てサポートしてもらえました。プロボでの留学生活が充実しています。",
    },
    {
      name: "佐藤さん",
      job: "社会人・語学留学",
      comment: "ユタ州の語学学校情報が豊富で、自分に最適な学校を見つけることができました。現地での生活もスムーズにスタートできました。",
    },
    {
      name: "山田さん",
      job: "高校生・交換留学",
      comment: "初めての海外留学で不安でしたが、Utah Study Supportの丁寧なサポートで安心して留学準備ができました。",
    },
    {
      name: "鈴木さん",
      job: "大学院生・研究留学",
      comment:
        "ユタ大学への留学手続きが複雑でしたが、専門的なアドバイスをいただき無事に入学できました。",
    },
    {
      name: "中村さん",
      job: "社会人・短期留学",
      comment: "仕事の休暇を利用した短期留学。効率的なプランを提案してもらい、充実した3週間を過ごせました。",
    },
    {
      name: "伊藤さん",
      job: "主婦・親子留学",
      comment: "家族でのユタ州留学を実現。子どもの学校探しから住居まで、家族全員のサポートをしていただきました。",
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
                      ease: "easeOut"
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