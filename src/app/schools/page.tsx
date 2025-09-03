import type { Metadata } from 'next';
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'ユタ州語学学校一覧 | Utah Study Support',
  description: 'ユタ州の主要語学学校をご紹介。UCEDA School、Internexus Provo、BYU English Language Center、Lumos Language Schoolなど、Utah Study Supportが厳選した優良語学学校の特徴、料金、サービス内容を詳しく解説します。',
  keywords: ['Utah Study Support', 'ユタ州語学学校', 'UCEDA School', 'Internexus Provo', 'BYU English Language Center', 'プロボ語学学校', 'ユタ州留学'],
  openGraph: {
    title: 'ユタ州語学学校一覧 | Utah Study Support',
    description: 'ユタ州の主要語学学校をご紹介。UCEDA School、Internexus Provo、BYU English Language Center、Lumos Language Schoolなど、優良語学学校の特徴、料金、サービス内容を詳しく解説。',
    type: 'website',
    url: 'https://utah-study-support.com/schools',
    images: [
      {
        url: '/og-schools.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support ユタ州語学学校一覧',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ユタ州語学学校一覧 | Utah Study Support',
    description: 'ユタ州の主要語学学校をご紹介。UCEDA School、Internexus Provo、BYU English Language Center、Lumos Language Schoolなど、優良語学学校の特徴、料金、サービス内容を詳しく解説。',
    images: ['/og-schools.jpg'],
  },
  alternates: {
    canonical: '/schools',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'ユタ州語学学校一覧',
  description: 'ユタ州プロボ市の主要語学学校をご紹介。UCEDA School、Internexus Provo、BYU English Language Centerなど、特徴や料金を詳しく解説します。',
  url: 'https://utahstudysupport.com/schools',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'EducationalOrganization',
        position: 1,
        name: 'UCEDA School (Provo)',
        description: '少人数制で実践的な英語学習。柔軟なスケジュールとリーズナブルな料金が魅力。',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Provo',
          addressRegion: 'UT',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'EducationalOrganization',
        position: 2,
        name: 'Internexus Provo',
        description: 'アカデミック英語に特化。学生ビザサポートと少人数クラスで質の高い教育を提供。',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Provo',
          addressRegion: 'UT',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'EducationalOrganization',
        position: 3,
        name: 'Brigham Young University (BYU) - English Language Center',
        description: 'BYUキャンパス内で学習。大学施設利用可能で大学進学準備コースも充実。',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Provo',
          addressRegion: 'UT',
          postalCode: '84602',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'EducationalOrganization',
        position: 4,
        name: 'Lumos Language School',
        description: 'CEA認定校でF-1ビザサポート完備。7レベルのCEFRカリキュラムと集中英語プログラムを提供。',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '930 S State St',
          addressLocality: 'Orem',
          addressRegion: 'UT',
          postalCode: '84097',
          addressCountry: 'US'
        }
      }
    ]
  }
};

export default function Schools() {
  const schools = [
    {
      name: "UCEDA School（Provo）",
      area: "ユタ州プロボ",
      address: "Provo, UT",
      phone: "",
      hours: "$275/月",
      access: "プロボ市内",
      features: ["少人数制", "実践的英語", "柔軟なスケジュール", "リーズナブル"],
      image: "/uceda.jpg"
    },
    {
      name: "Internexus Provo",
      area: "ユタ州プロボ",
      address: "Provo, UT",
      phone: "",
      hours: "初セメスター：$2,100（$525/月）、書籍：約$160",
      access: "プロボ市内",
      features: ["アカデミック英語", "学生ビザサポート", "少人数クラス", "書籍費別途"],
      image: "/Internexus.webp"
    },
    {
      name: "Brigham Young University (BYU) – English Language Center",
      area: "ユタ州プロボ",
      address: "Provo, UT 84602",
      phone: "",
      hours: "$2,800/セメスター（$700/月）",
      access: "BYUキャンパス内",
      features: ["BYUキャンパス内での学習", "少人数制クラス", "大学施設の利用可能", "アクティビティプログラム", "大学進学準備コース", "I-20発行"],
      image: "/BYUELC.webp"
    },
    {
      name: "Lumos Language School",
      area: "ユタ州オレム",
      address: "930 S State St, Orem, UT 84097",
      phone: "+1 801-265-2345",
      hours: "初回学期：$2,100、継続：$1,800",
      access: "オレム市内",
      features: ["CEA認定校", "F-1ビザサポート", "7レベルCEFRカリキュラム", "集中英語プログラム", "TOEFL対策コース", "フレキシブルなスケジュール"],
      image: "/lumos.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header currentPage="/schools" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ユタ州語学学校一覧
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Utah Study Supportが厳選した、ユタ州プロボ・オレムエリアの優良語学学校をご紹介。
            <br />
            質の高い英語教育と快適な生活環境で、あなたの留学目標達成を全力でサポートします。
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={school.image}
                  alt={school.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{school.name}</h2>
                    <div className="text-sm text-gray-500">{school.area}</div>
                  </div>
                  <div className="text-sm text-orange-500 font-medium">
                    {school.access}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">所在地</div>
                  <div className="text-sm text-gray-600">{school.address}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">学費・料金</div>
                  <div className="text-sm text-gray-600">{school.hours}</div>
                </div>
                {school.phone && (
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">電話番号</div>
                    <div className="text-sm text-gray-600">{school.phone}</div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">特徴</div>
                <div className="flex flex-wrap gap-2">
                  {school.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="inline-block bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 font-medium text-sm">
                  Utah Study Supportに相談する
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            留学プログラムについてもっと知りたい方へ
          </h2>
          <p className="text-gray-600 mb-6">
            Utah Study Supportでは、ユタ州留学に関する詳しい情報提供や個別相談を行っています。
            <br />
            語学学校選びから住居探しまで、経験豊富なスタッフがあなたの留学を完全サポートします。
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium"
            >
              お問い合わせ
            </Link>
            <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 font-medium">
              留学プログラム詳細
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}