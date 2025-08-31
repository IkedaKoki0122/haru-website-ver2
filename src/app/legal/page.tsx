"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

const legalDocuments = [
  {
    id: 1,
    title: "利用規約",
    description: "サービスの利用に関する規約です。",
    href: "/terms",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "プライバシーポリシー",
    description: "個人情報の取り扱いに関する方針です。",
    href: "/privacy",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "特定商取引法に基づく表記",
    description: "法律に基づく事業者情報の表示です。",
    href: "/legal/commerce",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export default function Legal() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      legalDocuments.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item.id]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />

      <main>

        {/* Page Title */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-200 ease-out">
                法的情報
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ease-out">
                Utah Study Supportのサービス利用に関する各種規約・方針をご確認いただけます。
                <br />
                ご利用前に必ずお読みください。
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid gap-6 md:gap-8">
              {legalDocuments.map((document, index) => (
                <Link
                  key={document.id}
                  href={document.href}
                  className={`block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-[1.02] group ${
                    visibleItems.includes(document.id) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 200}ms`
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 ease-out">
                          {document.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {document.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {document.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 ease-out"
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
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '1400ms' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-800 delay-1600 ease-out">
                ご不明な点がございましたら
              </h2>
              <p className="text-lg text-gray-600 mb-8 transform transition-all duration-800 delay-1800 ease-out">
                法的情報に関してご質問がある場合は、
                <br />
                お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-800 delay-2000 ease-out">
                <Link 
                  href="/contact"
                  className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 hover:scale-105 hover:shadow-lg font-medium transition-all duration-300 ease-out transform inline-block"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}