"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const qaData = [
  {
    id: 1,
    category: "コースについて",
    question: "どのコースを選べばよいですか？",
    answer: "お客様の目標や現在の英語レベルに応じて最適なコースをご提案いたします。無料カウンセリングにて詳しくご相談ください。ビジネス英会話、TOEIC、TOEFL、初級者向けの4つのコースをご用意しております。"
  },
  {
    id: 2,
    category: "コースについて",
    question: "受講期間はどのくらいですか？",
    answer: "基本的には3ヶ月間の集中プログラムとなります。ただし、お客様の目標やレベルに応じて2ヶ月または6ヶ月のプランもご提案可能です。"
  },
  {
    id: 3,
    category: "料金について",
    question: "料金の支払い方法を教えてください。",
    answer: "クレジットカード決済、銀行振込、分割払いに対応しております。分割払いの場合は最大24回までご利用いただけます。詳細は無料カウンセリング時にご相談ください。"
  },
  {
    id: 4,
    category: "料金について",
    question: "返金保証はありますか？",
    answer: "受講開始から30日以内であれば、受講料を全額返金いたします。ただし、一定の条件がございますので、詳細は利用規約をご確認ください。"
  },
  {
    id: 5,
    category: "学習サポート",
    question: "専属コンサルタントはどのようなサポートをしてくれますか？",
    answer: "週1回の面談で学習進捗の確認、カリキュラムの調整、学習方法の指導を行います。また、LINEでの日々の学習サポートや質問対応も実施しております。"
  },
  {
    id: 6,
    category: "学習サポート",
    question: "1日どのくらいの学習時間が必要ですか？",
    answer: "平均的には1日2-3時間の学習時間を推奨しております。お客様のライフスタイルに合わせて効率的な学習スケジュールを専属コンサルタントが作成いたします。"
  },
  {
    id: 7,
    category: "オンライン受講",
    question: "完全オンラインでの受講は可能ですか？",
    answer: "はい、完全オンラインでの受講が可能です。面談もオンラインで実施し、学習管理アプリを通じて日々のサポートを提供いたします。"
  },
  {
    id: 8,
    category: "オンライン受講",
    question: "必要な機材はありますか？",
    answer: "パソコンまたはタブレット、安定したインターネット環境があれば受講可能です。ヘッドセットは音質向上のため推奨しておりますが、必須ではありません。"
  },
  {
    id: 9,
    category: "その他",
    question: "無料カウンセリングはどのような内容ですか？",
    answer: "現在の英語レベル診断、目標設定、最適な学習プランのご提案を約60-90分で実施いたします。強引な勧誘は一切ございませんので、お気軽にご参加ください。"
  },
  {
    id: 10,
    category: "その他",
    question: "法人での申し込みは可能ですか？",
    answer: "はい、法人プランもご用意しております。複数名での受講割引や、企業様専用のカリキュラム作成も可能です。詳細はお問い合わせください。"
  }
];

const categories = ["すべて", "コースについて", "料金について", "学習サポート", "オンライン受講", "その他"];

export default function QAPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const filteredQA = selectedCategory === "すべて" 
    ? qaData 
    : qaData.filter(item => item.category === selectedCategory);

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
      filteredQA.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item.id]);
        }, index * 150);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredQA]);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/qa" />

      <main>
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-200 ease-out">
                よくある質問
              </h1>
              <p className="text-lg text-gray-600 transform transition-all duration-1000 delay-400 ease-out">
                Utah Study Supportに関してよく寄せられる質問をまとめました
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`flex flex-wrap gap-2 justify-center transition-all duration-800 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg transform ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

        {/* Q&A List */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-4">
              {filteredQA.map((item, index) => (
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
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-out group flex items-center justify-between"
                  >
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mb-2 transition-all duration-300 group-hover:bg-orange-200">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-medium text-gray-900 transition-all duration-300 group-hover:text-gray-800">
                        Q. {item.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-all duration-500 ease-out group-hover:text-orange-500 ${
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
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    openItems.includes(item.id) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 py-4 bg-white border-t transform transition-all duration-500 ease-out">
                      <div className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                        openItems.includes(item.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <span className="font-medium text-orange-600">A. </span>
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '1200ms' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-800 delay-1400 ease-out">
                他にご質問がある場合は
              </h2>
              <p className="text-lg text-gray-600 mb-8 transform transition-all duration-800 delay-1600 ease-out">
                お気軽に無料カウンセリングまたはお問い合わせよりご連絡ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-800 delay-1800 ease-out">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 hover:scale-105 hover:shadow-lg font-medium transition-all duration-300 ease-out transform">
                  無料カウンセリング予約
                </button>
                <Link 
                  href="/contact"
                  className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 hover:scale-105 hover:shadow-md font-medium transition-all duration-300 ease-out transform"
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