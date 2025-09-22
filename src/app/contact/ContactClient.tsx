"use client";
import { useState, useEffect, useRef } from "react";
import { logger } from "@/utils/logger";
import { useToastContext } from "@/context/ToastContext";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { error: showError, success: showSuccess } = useToastContext();
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            (entry.target as HTMLElement).style.opacity = '1';
            
            const formElements = entry.target.querySelectorAll('.form-element');
            formElements.forEach((element, index) => {
              setTimeout(() => {
                (element as HTMLElement).style.transform = 'translateY(0)';
                (element as HTMLElement).style.opacity = '1';
              }, index * 100);
            });

            const infoCards = entry.target.querySelectorAll('.info-card');
            infoCards.forEach((card, index) => {
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

    const elements = [formRef.current, infoRef.current];
    elements.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        showSuccess("送信完了", "お問い合わせを受け付けました。");
      } else {
        const errorData = await response.json().catch(() => ({}));
        showError(
          "送信エラー", 
          errorData.error || "送信に失敗しました。もう一度お試しください。"
        );
      }
    } catch (error) {
      logger.error("Contact form submission failed", error);
      showError(
        "エラーが発生しました", 
        "予期しないエラーが発生しました。もう一度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <main className="py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                お問い合わせありがとうございます
              </h1>
              <p className="text-gray-600 mb-6">
                お問い合わせを受け付けいたしました。<br />
                内容を確認次第、担当者よりご連絡させていただきます。<br />
                通常、1-2営業日以内にご回答いたします。
              </p>
              <a
                href="/"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium"
              >
                ホームに戻る
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        
        .form-element {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .info-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .form-hover {
          transition: all 0.3s ease;
        }
        
        .form-hover:focus {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2);
        }
        
        .button-hover {
          transition: all 0.3s ease;
        }
        
        .button-hover:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.3);
        }
      `}</style>
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="bg-gray-50 py-16 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hero-text">
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-600 hero-subtitle">
              Utah Study Supportに関するご質問やご相談がございましたら、<br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={formRef} className="py-16 opacity-0">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
              <div className="form-element">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 form-hover"
                  placeholder="山田太郎"
                />
              </div>

              <div className="form-element">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 form-hover"
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-element">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 form-hover"
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="form-element">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 form-hover"
                >
                  <option value="">選択してください</option>
                  <option value="course">コースについて</option>
                  <option value="pricing">料金について</option>
                  <option value="schedule">スケジュールについて</option>
                  <option value="counseling">無料カウンセリングについて</option>
                  <option value="school">スクールについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-element">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 form-hover"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="text-center form-element">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 disabled:bg-orange-300 font-medium text-lg button-hover animate-float"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section ref={infoRef} className="py-16 bg-gray-50 opacity-0">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                その他のお問い合わせ方法
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm card-hover info-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">お電話でのお問い合わせ</h3>
                <div className="text-2xl font-bold text-orange-500 mb-2">0120-123-456</div>
                <p className="text-gray-600 text-sm">
                  受付時間：平日 9:00-21:00 / 土日祝 9:00-18:00
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm card-hover info-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">無料カウンセリング</h3>
                <p className="text-gray-600 text-sm mb-4">
                  お客様の英語学習の課題を分析し、最適な学習プランをご提案いたします。
                </p>
                <a 
                  href="https://line.me/R/ti/p/@your-line-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 font-medium button-hover text-center"
                >
                  無料カウンセリングに申し込む
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm card-hover info-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.39-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">LINEでお友達追加</h3>
                <p className="text-gray-600 text-sm mb-4">
                  最新情報やお得なキャンペーン情報をお届けします。お気軽にお問い合わせください。
                </p>
                <a 
                  href="https://line.me/R/ti/p/@your-line-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 font-medium button-hover text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.39-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    <span>LINE友達追加</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}