import type { Metadata } from 'next';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import SchoolsSection from "../components/SchoolsSection";
import NewsSection from "../components/NewsSection";
import FinalCTASection from "../components/FinalCTASection";
import LanguageSchoolsSection from "../components/LanguageSchoolsSection";
import PlanSelectionSection from "../components/PlanSelectionSection";

export const metadata: Metadata = {
  title: 'Utah Study Support | ユタ州留学・語学学校サポート',
  description: 'ユタ州での留学・語学学校選びをサポート。業界最安値¥49,800〜でプロフェッショナルな留学支援を提供。学校選びから住居手配、現地サポートまでワンストップでトータルサポートします。',
  keywords: ['アメリカ留学', 'ユタ州', '語学学校', '留学サポート', '英語学習', '海外留学', 'プロボ', '留学斡旋'],
  openGraph: {
    title: 'Utah Study Support | ユタ州留学・語学学校サポート',
    description: 'ユタ州での留学・語学学校選びをサポート。業界最安値¥49,800〜でプロフェッショナルな留学支援を提供。',
    type: 'website',
    url: 'https://utah-study-support.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support - ユタ州留学サポート',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Study Support | ユタ州留学・語学学校サポート',
    description: 'ユタ州での留学・語学学校選びをサポート。業界最安値¥49,800〜でプロフェッショナルな留学支援を提供。',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Utah Study Support',
  url: 'https://utah-study-support.com',
  logo: 'https://utah-study-support.com/logo.png',
  description: 'ユタ州専門の留学斡旋サービス。語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポートします。',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '有楽町1-2-2 東宝日比谷ビル7階',
    addressLocality: '千代田区',
    addressRegion: '東京都',
    postalCode: '100-0006',
    addressCountry: 'JP'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '03-XXXX-XXXX',
    email: 'info@utah-study-support.com',
    contactType: 'customer service',
    availableLanguage: ['ja', 'en']
  },
  sameAs: [
    'https://line.me/R/ti/p/@your-line-id'
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TestimonialsCarousel />
        <CTASection />
        <AboutSection />
        <FeaturesSection />
        <PlanSelectionSection />
        <LanguageSchoolsSection />
        <SchoolsSection />
        <NewsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}