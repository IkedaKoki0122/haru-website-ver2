import type { Metadata } from 'next';
import TopicsClient from './TopicsClient';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: 'ニュース・トピックス | Utah Study Support',
  description: 'ユタ州留学に関する最新ニュースや情報をお届けします。大学入学サポート、住居情報、ビザ申請手続き、学生体験談など、Utah Study Supportの最新情報をチェックしてください。',
  keywords: ['Utah Study Support', 'ユタ州留学ニュース', 'トピックス', '留学情報', '大学入学サポート', '住居情報', 'ビザ申請', '体験談'],
  openGraph: {
    title: 'ニュース・トピックス | Utah Study Support',
    description: 'ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談などの最新情報。',
    type: 'website',
    url: 'https://utah-study-support.com/topics',
    images: [
      {
        url: '/og-topics.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support ニュース・トピックス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ニュース・トピックス | Utah Study Support',
    description: 'ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談などの最新情報。',
    images: ['/og-topics.jpg'],
  },
  alternates: {
    canonical: '/topics',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ユタ州留学ニュース・トピックス',
  description: 'ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談など役立つ情報が満載です。',
  url: 'https://utahstudysupport.com/topics',
  publisher: {
    '@type': 'Organization',
    name: 'Utah Study Support',
    url: 'https://utahstudysupport.com'
  },
  inLanguage: 'ja'
};

function Topics() {
  const newsItems = useMemo(() => [
    {
      id: 1,
      date: "2024.08.15",
      title: "ユタ州大学2025年度入学申請サポート開始",
      excerpt: "ユタ州の主要大学への2025年度入学申請サポートを開始しました。経験豊富なスタッフが合格まで完全サポートいたします。",
      category: "留学準備",
      image: "/news-01.jpg"
    },
    {
      id: 2,
      date: "2024.08.10",
      title: "プロボ市の新しい学生アパート情報",
      excerpt: "ユタ州プロボ市に新しい学生向けアパートがオープン。キャンパスから徒歩圏内の好立地で、留学生に人気の設備が充実しています。",
      category: "住居情報",
      image: "/news-02.jpg"
    },
    {
      id: 3,
      date: "2024.08.05",
      title: "ユタ大学合格率95%達成！2024年度実績",
      excerpt: "Utah Study Support経由での2024年度ユタ大学合格率が95%を達成しました。徹底したサポート体制の成果です。",
      category: "学校情報",
      image: "/news-03.jpg"
    },
    {
      id: 4,
      date: "2024.07.30",
      title: "学生ビザ申請手続きの最新情報",
      excerpt: "2024年度のアメリカ学生ビザ申請手続きに関する最新情報をお届け。申請から取得までの流れを詳しく解説します。",
      category: "ビザ・手続き",
      image: "/news-04.jpg"
    },
    {
      id: 5,
      date: "2024.07.25",
      title: "留学生インタビュー：ユタ大学での充実した学生生活",
      excerpt: "Utah Study Supportを利用してユタ大学に留学中の学生による体験談。現地での学習環境や生活の様子をお届けします。",
      category: "体験談",
      image: "/news-05.jpg"
    },
    {
      id: 6,
      date: "2024.07.20",
      title: "ユタ州の冬の気候と服装ガイド",
      excerpt: "初めてユタ州で冬を過ごす留学生向けに、気候の特徴と適切な服装選びのポイントをご紹介します。",
      category: "現地生活",
      image: "/news-06.jpg"
    },
    {
      id: 7,
      date: "2024.07.15",
      title: "ユタ州立大学システムの特徴と選び方",
      excerpt: "ユタ州には複数の州立大学があります。それぞれの特色や専攻分野を比較し、あなたに最適な大学選びをサポートします。",
      category: "学校情報",
      image: "/news-07.jpg"
    },
    {
      id: 8,
      date: "2024.07.10",
      title: "留学前に準備すべき必需品チェックリスト",
      excerpt: "ユタ州留学を控えている方向けに、現地で困らないために日本から持参すべき必需品をリストアップしました。",
      category: "留学準備",
      image: "/news-08.jpg"
    }
  ], []);

  const categories = useMemo(() => ["すべて", "留学準備", "現地生活", "学校情報", "住居情報", "体験談", "ビザ・手続き"], []);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header currentPage="/topics" />
      <Breadcrumb />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              お役立ちブログ
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              ユタ州留学に関するお役立ち情報をお届けします
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <motion.section 
          className="py-8 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "すべて"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut", 
                    delay: 0.6 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* News List */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: 1.0 + index * 0.1 
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">画像準備中</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <Link
                        href={`/topics/${item.id}`}
                        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
                      >
                        続きを読む
                        <svg
                          className="w-4 h-4 ml-1"
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
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
            >
              <nav className="flex items-center space-x-2">
                <motion.button 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="px-4 py-2 bg-orange-500 text-white rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>
                <span className="px-2 text-gray-500">...</span>
                <motion.button 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  10
                </motion.button>
                <motion.button 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </nav>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
        >
          <div className="w-full h-[250px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
                >
                  無料留学相談実施中
                </motion.h2>
                <motion.p 
                  className="text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.9 }}
                >
                  あなたのユタ州留学の目標を伺い、最適な留学プランをご提案いたします。
                </motion.p>
                <motion.a 
                  href="https://line.me/R/ti/p/@your-line-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 3.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  今すぐ申し込む
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default memo(Topics);