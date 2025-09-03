import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: '会社概要 | Utah Study Support',
  description: 'Utah Study Supportの会社概要。岡田祥吾が代表を務める個人事業として2025年に設立。ユタ州専門の留学斡旋サービスで、語学学校選びから現地サポートまで幅広くサービスを提供しています。',
  keywords: ['Utah Study Support', '会社概要', '岡田祥吾', 'ユタ州留学', '個人事業', '留学斡旋'],
  openGraph: {
    title: '会社概要 | Utah Study Support',
    description: 'Utah Study Supportの会社概要。岡田祥吾が代表を務める個人事業として2025年に設立。ユタ州専門の留学斡旋サービスを提供。',
    type: 'website',
    url: 'https://utah-study-support.com/company',
    images: [
      {
        url: '/og-company.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support 会社概要',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社概要 | Utah Study Support',
    description: 'Utah Study Supportの会社概要。岡田祥吾が代表を務める個人事業として2025年に設立。ユタ州専門の留学斡旋サービスを提供。',
    images: ['/og-company.jpg'],
  },
  alternates: {
    canonical: '/company',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Utah Study Support',
  alternateName: '岡田祥吾',
  founder: '岡田祥吾',
  foundingDate: '2025-09-02',
  description: 'ユタ州専門の留学斡旋個人事業として、語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポートします。',
  url: 'https://utahstudysupport.com/company',
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
    email: 'info@utahstudysupport.com',
    contactType: 'customer service'
  },
  knowsAbout: ['ユタ州留学', '語学学校斡旋', '留学生住居手配', '現地サポート'],
  areaServed: 'Utah'
};

export default function Company() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header currentPage="/company" />
      <Breadcrumb />
      <CompanyClient />
      <Footer />
    </div>
  );
}