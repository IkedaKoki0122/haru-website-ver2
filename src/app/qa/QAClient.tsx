"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    category: "コースについて",
    question: "どのくらいの期間で効果が出ますか？",
    answer: "個人差はありますが、多くの受講生が3ヶ月で明確な英語力向上を実感しています。毎日2〜3時間の学習を継続することで、ビジネスで使える実践的な英語力が身につきます。"
  },
  {
    id: 4,
    category: "コースについて",
    question: "初心者でも受講できますか？",
    answer: "はい、可能です。初級者コースもご用意しており、英語学習が初めての方でも安心して受講いただけます。専属コンサルタントがあなたのレベルに合わせたカリキュラムを作成いたします。"
  },
  {
    id: 5,
    category: "料金・支払い",
    question: "料金の支払い方法を教えてください。",
    answer: "クレジットカード決済、銀行振込、分割払いに対応しております。分割払いの場合は最大24回までご利用いただけます。詳細は無料カウンセリング時にご相談ください。"
  },
  {
    id: 6,
    category: "料金・支払い",
    question: "料金はいくらですか？",
    answer: "コースにより異なりますが、3ヶ月コースで544,500円〜となっております。分割払いやクレジットカード決済にも対応しておりますので、お気軽にご相談ください。"
  },
  {
    id: 7,
    category: "料金・支払い",
    question: "返金保証はありますか？",
    answer: "はい、30日間全額返金保証をご用意しております。受講開始から30日以内であれば、理由を問わず全額返金いたします。安心して始めていただけます。"
  },
  {
    id: 8,
    category: "料金・支払い",
    question: "分割払いは可能ですか？",
    answer: "はい、分割払いに対応しております。最大24回まで分割が可能で、月々23,000円程度からご受講いただけます。詳細は無料カウンセリングでご相談ください。"
  },
  {
    id: 9,
    category: "学習サポート",
    question: "専属コンサルタントはどのようなサポートをしてくれますか？",
    answer: "週1回の面談で学習進捗の確認、カリキュラムの調整、学習方法の指導を行います。また、LINEでの日々の学習サポートや質問対応も実施しております。"
  },
  {
    id: 10,
    category: "学習サポート",
    question: "1日どのくらいの学習時間が必要ですか？",
    answer: "平均的には1日2-3時間の学習時間を推奨しております。お客様のライフスタイルに合わせて効率的な学習スケジュールを専属コンサルタントが作成いたします。"
  },
  {
    id: 11,
    category: "学習サポート",
    question: "コンサルタントはどのような方ですか？",
    answer: "全員が英語学習のプロフェッショナルです。TOEIC900点以上、または同等の英語力を持ち、専門的な研修を受けたコンサルタントが担当いたします。"
  },
  {
    id: 12,
    category: "学習サポート",
    question: "学習で分からないことがあったら質問できますか？",
    answer: "はい、専用アプリから24時間いつでも質問可能です。また、週1回の面談でも詳しくサポートいたします。学習の悩みや疑問は遠慮なくご相談ください。"
  },
  {
    id: 13,
    category: "学習サポート",
    question: "忙しくて学習時間が取れない場合はどうすればよいですか？",
    answer: "コンサルタントがあなたのライフスタイルに合わせた学習スケジュールを提案します。隙間時間を有効活用する方法や効率的な学習法をアドバイスいたします。"
  },
  {
    id: 14,
    category: "オンライン受講",
    question: "完全オンラインでの受講は可能ですか？",
    answer: "はい、完全オンラインでの受講が可能です。面談もオンラインで実施し、学習管理アプリを通じて日々のサポートを提供いたします。"
  },
  {
    id: 15,
    category: "オンライン受講",
    question: "必要な機材はありますか？",
    answer: "パソコンまたはタブレット、安定したインターネット環境があれば受講可能です。ヘッドセットは音質向上のため推奨しておりますが、必須ではありません。"
  },
  {
    id: 16,
    category: "無料カウンセリング",
    question: "無料カウンセリングはどのような内容ですか？",
    answer: "現在の英語レベル診断、目標設定、最適な学習プランのご提案を約60-90分で実施いたします。強引な勧誘は一切ございませんので、お気軽にご参加ください。"
  },
  {
    id: 17,
    category: "無料カウンセリング",
    question: "カウンセリングの予約はどのように取れますか？",
    answer: "公式サイトの予約フォームまたはお電話にて承っております。平日・土日祝日問わず、朝9時から夜21時まで対応しております。"
  },
  {
    id: 18,
    category: "無料カウンセリング",
    question: "カウンセリング後すぐに契約する必要がありますか？",
    answer: "いいえ、その場での契約は必要ありません。ご自宅でじっくりご検討いただき、納得いただいてからお申し込みください。"
  },
  {
    id: 19,
    category: "その他",
    question: "法人での申し込みは可能ですか？",
    answer: "はい、法人プランもご用意しております。複数名での受講割引や、企業様専用のカリキュラム作成も可能です。詳細はお問い合わせください。"
  }
];

const categories = ["すべて", "コースについて", "料金・支払い", "学習サポート", "オンライン受講", "無料カウンセリング", "その他"];

export default function QAClient() {
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
  );
}