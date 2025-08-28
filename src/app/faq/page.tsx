"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const faqData = [
  {
    id: 1,
    category: "コースについて",
    question: "どのくらいの期間で効果が出ますか？",
    answer: "個人差はありますが、多くの受講生が3ヶ月で明確な英語力向上を実感しています。毎日2〜3時間の学習を継続することで、ビジネスで使える実践的な英語力が身につきます。"
  },
  {
    id: 2,
    category: "コースについて",
    question: "初心者でも受講できますか？",
    answer: "はい、可能です。初級者コースもご用意しており、英語学習が初めての方でも安心して受講いただけます。専属コンサルタントがあなたのレベルに合わせたカリキュラムを作成いたします。"
  },
  {
    id: 3,
    category: "コースについて",
    question: "オンラインでも受講できますか？",
    answer: "はい、オンラインでの受講も可能です。専用アプリを使用してコンサルタントとの面談や学習管理を行い、校舎での受講と同じ品質のサービスを提供いたします。"
  },
  {
    id: 4,
    category: "料金・支払い",
    question: "料金はいくらですか？",
    answer: "コースにより異なりますが、3ヶ月コースで544,500円〜となっております。分割払いやクレジットカード決済にも対応しておりますので、お気軽にご相談ください。"
  },
  {
    id: 5,
    category: "料金・支払い",
    question: "返金保証はありますか？",
    answer: "はい、30日間全額返金保証をご用意しております。受講開始から30日以内であれば、理由を問わず全額返金いたします。安心して始めていただけます。"
  },
  {
    id: 6,
    category: "料金・支払い",
    question: "分割払いは可能ですか？",
    answer: "はい、分割払いに対応しております。最大24回まで分割が可能で、月々23,000円程度からご受講いただけます。詳細は無料カウンセリングでご相談ください。"
  },
  {
    id: 7,
    category: "サポート体制",
    question: "コンサルタントはどのような方ですか？",
    answer: "全員が英語学習のプロフェッショナルです。TOEIC900点以上、または同等の英語力を持ち、専門的な研修を受けたコンサルタントが担当いたします。"
  },
  {
    id: 8,
    category: "サポート体制",
    question: "学習で分からないことがあったら質問できますか？",
    answer: "はい、専用アプリから24時間いつでも質問可能です。また、週1回の面談でも詳しくサポートいたします。学習の悩みや疑問は遠慮なくご相談ください。"
  },
  {
    id: 9,
    category: "サポート体制",
    question: "忙しくて学習時間が取れない場合はどうすればよいですか？",
    answer: "コンサルタントがあなたのライフスタイルに合わせた学習スケジュールを提案します。隙間時間を有効活用する方法や効率的な学習法をアドバイスいたします。"
  },
  {
    id: 10,
    category: "無料カウンセリング",
    question: "無料カウンセリングでは何をしますか？",
    answer: "現在の英語力診断、学習目標の設定、最適なコースの提案を行います。所要時間は約60分で、無理な勧誘は一切いたしません。お気軽にご相談ください。"
  },
  {
    id: 11,
    category: "無料カウンセリング",
    question: "カウンセリングの予約はどのように取れますか？",
    answer: "公式サイトの予約フォームまたはお電話にて承っております。平日・土日祝日問わず、朝9時から夜21時まで対応しております。"
  },
  {
    id: 12,
    category: "無料カウンセリング",
    question: "カウンセリング後すぐに契約する必要がありますか？",
    answer: "いいえ、その場での契約は必要ありません。ご自宅でじっくりご検討いただき、納得いただいてからお申し込みください。"
  }
];

const categories = ["全て", "コースについて", "料金・支払い", "サポート体制", "無料カウンセリング"];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("全て");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const filteredFAQ = selectedCategory === "全て" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setVisibleItems([]);
    const timer = setTimeout(() => {
      filteredFAQ.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item.id]);
        }, index * 150);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredFAQ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                ホーム
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">よくある質問</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ease-out">
                よくある質問
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ease-out">
                英語習得研究所に関してよくいただくご質問をまとめました。
                <br />
                こちらで解決しない場合は、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-800 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg transform ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 100}ms`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <div
                  key={item.id}
                  className={`border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-600 ease-out hover:shadow-xl hover:scale-[1.02] ${
                    visibleItems.includes(item.id) 
                      ? 'opacity-100 translate-y-0 translate-x-0' 
                      : 'opacity-0 translate-y-8 translate-x-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-all duration-300 ease-out group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-xs text-orange-500 font-medium mb-1 transition-all duration-300 group-hover:text-orange-600">
                          {item.category}
                        </div>
                        <div className="text-lg font-medium text-gray-900 transition-all duration-300 group-hover:text-gray-800">
                          Q. {item.question}
                        </div>
                      </div>
                      <div className="ml-4">
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-all duration-500 ease-out group-hover:text-orange-500 ${
                            openItems.includes(item.id) ? "rotate-180 text-orange-500" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    openItems.includes(item.id) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4 bg-gray-50 transform transition-all duration-500 ease-out">
                      <div className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                        openItems.includes(item.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <span className="font-medium text-orange-500">A. </span>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '1200ms' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-800 delay-1400 ease-out">
                まだ疑問が解決しませんか？
              </h2>
              <p className="text-lg text-gray-600 mb-8 transform transition-all duration-800 delay-1600 ease-out">
                無料カウンセリングで詳しくご説明いたします。
                <br />
                お気軽にお申し込みください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-800 delay-1800 ease-out">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 hover:scale-105 hover:shadow-lg font-medium transition-all duration-300 ease-out transform">
                  無料カウンセリングに申し込む
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 hover:scale-105 hover:shadow-md font-medium transition-all duration-300 ease-out transform">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}