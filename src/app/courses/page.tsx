import type { Metadata } from 'next';
import Image from "next/image";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import CoursesClient from "./CoursesClient";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utah Study Support - ユタ州留学サポートサービス',
  description: '学校選びから住居手配、現地サポートまで、ユタ州留学をトータルサポート。業界最安値¥79,800でプロフェッショナルな留学支援を提供します。',
  provider: {
    '@type': 'Organization',
    name: 'Utah Study Support',
    url: 'https://utahstudysupport.com'
  },
  offers: [
    {
      '@type': 'Offer',
      name: '基本サポートプラン',
      price: '79800',
      priceCurrency: 'JPY',
      description: '語学学校選び、住居手配、現地サポートまでの基本的な留学支援サービス'
    }
  ],
  areaServed: 'Utah',
  serviceType: '留学斡旋サービス',
  url: 'https://utahstudysupport.com/courses'
};

export const metadata: Metadata = {
  title: 'サービス・料金 | Utah Study Support - ユタ州留学サポート',
  description: 'Utah Study Supportの留学サポートサービスと料金をご紹介。学校選びから住居手配、現地サポートまで、ユタ州留学をトータルサポート。業界最安値¥79,800でプロフェッショナルな留学支援を提供します。',
  keywords: ['ユタ州留学', '留学サポート', '語学学校', '住居手配', '現地サポート', 'Utah Study Support', '留学斡旋', 'プロボ'],
  openGraph: {
    title: 'サービス・料金 | Utah Study Support - ユタ州留学サポート',
    description: 'Utah Study Supportの留学サポートサービスと料金をご紹介。学校選びから住居手配、現地サポートまで、ユタ州留学をトータルサポート。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Utah Study Support',
    images: [
      {
        url: '/og-courses.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support コース・料金ページ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サービス・料金 | Utah Study Support - ユタ州留学サポート',
    description: 'Utah Study Supportの留学サポートサービスと料金をご紹介。ユタ州留学をトータルサポート。',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: '/courses',
  },
};

export default function CoursesPage() {

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header currentPage="/courses" />
      <Breadcrumb />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                サービス・料金
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ユタ州留学の夢を実現する充実のサポートサービス
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Courses Section */}
        <CoursesClient />


        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Utah Study Supportが選ばれる理由
              </h2>
              <p className="text-gray-600">
                ユタ州留学を成功に導く3つのサポート
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/icon01.svg"
                    alt="科学的カリキュラム"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  専門的な留学サポート
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ユタ州に特化した専門知識で、学校選びから手続きまで最適な留学プランをご提案します。
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/icon02.svg"
                    alt="専属コンサルタント"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  現地サポート体制
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  現地スタッフによる24時間対応で、留学中の困ったをすぐに解決。安心の留学生活をお約束。
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/icon03.svg"
                    alt="継続サポート"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  充実のアフターケア
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  渡航前の準備から帰国後のキャリアサポートまで、留学の全工程をトータルサポート。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                よくある質問
              </h2>
            </div>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. 英語力に自信がなくても留学できますか？
                </h3>
                <p className="text-gray-600">
                  A. はい、語学学校では初級クラスから上級クラスまで幅広いレベルに対応しています。事前の英語力診断で最適な学校をご提案します。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. 留学期間はどのくらいがおすすめですか？
                </h3>
                <p className="text-gray-600">
                  A. 目的により異なりますが、3ヶ月～1年が一般的です。短期留学から長期留学まで、ご希望に合わせたプランをご提案します。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. 住居の手配もお願いできますか？
                </h3>
                <p className="text-gray-600">
                  A. はい、提携アパートやホームステイなど、ご希望と予算に合わせた住居をご紹介・手配いたします。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. サポート料金の支払い方法は？
                </h3>
                <p className="text-gray-600">
                  A. 銀行振込、クレジットカード決済に対応しています。分割払いのご相談も承っております。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              無料留学相談実施中
            </h2>
            <p className="text-gray-600 mb-8">
              あなたの留学の夢や目標をお聞きして、最適な留学プランをご提案いたします。
            </p>
            <a 
              href="https://line.me/R/ti/p/@your-line-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-10 py-3 rounded-full hover:bg-orange-600 text-lg font-medium transition-colors"
            >
              今すぐ申し込む
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}