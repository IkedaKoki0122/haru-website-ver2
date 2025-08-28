import type { Metadata } from 'next';
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: 'コース・料金 | 英語習得研究所 - 英語コーチング',
  description: '英語習得研究所の各種英語コースと料金をご紹介。ビジネス英会話、TOEIC、TOEFL、初級者向けなど、あなたの目標に合わせた最適なコースをお選びください。3ヶ月の短期集中で確実な英語力向上を実現します。',
  keywords: ['英語コース', '英語学習', 'TOEIC対策', 'ビジネス英語', '英語コーチング', '英語習得研究所', '短期集中', '英会話'],
  openGraph: {
    title: 'コース・料金 | 英語習得研究所 - 英語コーチング',
    description: '英語習得研究所の各種英語コースと料金をご紹介。ビジネス英会話、TOEIC、TOEFL、初級者向けなど、あなたの目標に合わせた最適なコースをお選びください。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '英語習得研究所',
    images: [
      {
        url: '/og-courses.jpg',
        width: 1200,
        height: 630,
        alt: '英語習得研究所 コース・料金ページ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'コース・料金 | 英語習得研究所 - 英語コーチング',
    description: '英語習得研究所の各種英語コースと料金をご紹介。あなたの目標に合わせた最適なコースをお選びください。',
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
      <Header currentPage="/courses" />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                コース・料金
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                あなたの目標に合わせた最適なコースをお選びください
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
                英語習得研究所の特徴
              </h2>
              <p className="text-gray-600">
                短期集中で確実に英語力を向上させる3つのポイント
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
                  科学的カリキュラム
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  応用言語学に基づいた科学的アプローチで、短期間で確実な英語力向上を実現します。
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
                  専属コンサルタント
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  英語学習のプロフェッショナルが、あなた専用のカリキュラムで学習進捗を徹底管理。
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
                  継続サポート
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  毎日の学習管理から週次面談まで、挫折しない仕組みで学習継続をサポート。
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
                  Q. 英語初心者でも受講できますか？
                </h3>
                <p className="text-gray-600">
                  A. はい、初級者コースでは英語学習が初めての方でも安心して受講いただけるよう、基礎から丁寧に指導いたします。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. 受講期間中はどのくらい学習時間が必要ですか？
                </h3>
                <p className="text-gray-600">
                  A. 1日約3時間の学習を推奨しております。専属コンサルタントがあなたのライフスタイルに合わせた学習計画を立てます。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. オンラインでの受講は可能ですか？
                </h3>
                <p className="text-gray-600">
                  A. はい、全てのコースでオンライン受講が可能です。面談もオンラインで実施いたします。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Q. 受講料の分割払いは可能ですか？
                </h3>
                <p className="text-gray-600">
                  A. はい、クレジットカード決済により分割払いが可能です。詳細はお申込み時にご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              無料カウンセリング実施中
            </h2>
            <p className="text-gray-600 mb-8">
              あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
            </p>
            <button className="bg-orange-500 text-white px-10 py-3 rounded-full hover:bg-orange-600 text-lg font-medium transition-colors">
              今すぐ申し込む
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}