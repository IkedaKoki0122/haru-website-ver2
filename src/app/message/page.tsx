"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

export default function MessagePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageText2, setMessageText2] = useState("");
  const [messageText3, setMessageText3] = useState("");
  const [titleText, setTitleText] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  const fullMessage = "私たちUtah Study Supportは、「世界で自由に活躍できる人を増やす」という理念のもと、本質的な英語力向上を目指すコーチングサービスを提供しています。";
  const fullMessage2 = "多くの日本人が英語学習で挫折してしまう原因は、正しい学習方法を知らないこと、そして継続できる環境がないことです。Utah Study Supportでは、応用言語学に基づいた科学的なアプローチと、専属コンサルタントによる徹底的なサポートにより、短期間で確実な成果をお約束します。";
  const fullMessage3 = "英語は単なるツールではありません。新しい世界への扉であり、人生の可能性を広げる力です。私たちと一緒に、あなたの英語学習を成功に導きましょう。";
  const fullTitle = "英語学習に革命を起こす";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // タイトルのタイピング
      let currentIndex = 0;
      const titleTypewriterInterval = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setTitleText(fullTitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(titleTypewriterInterval);
          
          // 最初のメッセージのタイピング
          let messageIndex1 = 0;
          const messageTypewriterInterval1 = setInterval(() => {
            if (messageIndex1 <= fullMessage.length) {
              setMessageText(fullMessage.slice(0, messageIndex1));
              messageIndex1++;
            } else {
              clearInterval(messageTypewriterInterval1);
              
              // 2番目のメッセージのタイピング
              let messageIndex2 = 0;
              const messageTypewriterInterval2 = setInterval(() => {
                if (messageIndex2 <= fullMessage2.length) {
                  setMessageText2(fullMessage2.slice(0, messageIndex2));
                  messageIndex2++;
                } else {
                  clearInterval(messageTypewriterInterval2);
                  
                  // 3番目のメッセージのタイピング
                  let messageIndex3 = 0;
                  const messageTypewriterInterval3 = setInterval(() => {
                    if (messageIndex3 <= fullMessage3.length) {
                      setMessageText3(fullMessage3.slice(0, messageIndex3));
                      messageIndex3++;
                    } else {
                      clearInterval(messageTypewriterInterval3);
                    }
                  }, 20);
                }
              }, 20);
            }
          }, 20);
        }
      }, 20);
      
      return () => {
        clearInterval(titleTypewriterInterval);
      };
    }
  }, [isVisible, fullTitle, fullMessage, fullMessage2, fullMessage3]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            (entry.target as HTMLElement).style.opacity = '1';
            
            const cards = entry.target.querySelectorAll('.card-hover');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.transform = 'translateY(0)';
                (card as HTMLElement).style.opacity = '1';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [profileRef.current, valuesRef.current];
    elements.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        
        .hero-text {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out;
        }
        
        .hero-subtitle {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? '0' : '20px'});
          transition: all 0.8s ease-out 0.3s;
        }
        
        .typewriter {
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .parallax-bg {
          transform: translateY(var(--scroll-y, 0));
        }
      `}</style>
      <Header />
      <Breadcrumb />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 hero-text">
                代表メッセージ
              </h1>
              <p className="text-gray-600 text-lg hero-subtitle">
                CEO Message
              </p>
            </div>
          </div>
        </section>

        {/* CEO Profile */}
        <section ref={profileRef} className="py-16 bg-white opacity-0">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 animate-slide-in-left">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden animate-scale-in">
                  <Image
                    src="/ceo-photo.jpg"
                    alt="代表取締役CEO"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl font-bold text-gray-900">岡田 祥吾</h2>
                  <p className="text-gray-600">代表取締役CEO</p>
                </div>
              </div>
              <div className="lg:w-2/3 animate-slide-in-right">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 typewriter">
                      {titleText}
                    </h3>
                    <p className="text-gray-700 leading-relaxed typewriter mb-6">
                      {messageText}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 leading-relaxed typewriter mb-6">
                      {messageText2}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed typewriter">
                      {messageText3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section ref={valuesRef} className="py-16 bg-orange-50 opacity-0">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                私たちの価値観
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-sm card-hover transform translate-y-8 opacity-0 transition-all duration-700 delay-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Results Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  結果にコミットし、必ず成果を出すことを約束します。
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-sm card-hover transform translate-y-8 opacity-0 transition-all duration-700 delay-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Science Based
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  科学的根拠に基づいた効果的な学習方法を提供します。
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-sm card-hover transform translate-y-8 opacity-0 transition-all duration-700 delay-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  お客様の成功を第一に考え、最高のサービスを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="w-full h-[250px] relative">
            <Image
              src="/helo2.webp"
              alt="Utah Study Support Background"
              fill
              className="object-cover parallax-bg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white transform translate-y-4 opacity-0 transition-all duration-1000 delay-700" style={{transform: isVisible ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible ? 1 : 0}}>
                <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
                  まずは無料カウンセリングから
                </h2>
                <p className="text-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
                </p>
                <a 
                  href="https://line.me/R/ti/p/@your-line-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white px-10 py-3 rounded-full hover:bg-orange-600 text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up text-center" 
                  style={{animationDelay: '0.4s'}}
                >
                  無料カウンセリングに申し込む
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}