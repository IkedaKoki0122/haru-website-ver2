import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import AboutClient from "./AboutClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Utah Study Supportとは | 当社について',
  description: 'Utah Study Supportは、ユタ州専門の留学斡旋サービスです。語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポート。経験豊富なスタッフが皆様の留学成功をお手伝いします。',
  keywords: ['Utah Study Support', 'ユタ州留学', '留学サポート', '語学学校', '現地サポート', '会社概要'],
  openGraph: {
    title: 'Utah Study Supportとは | 当社について',
    description: 'Utah Study Supportは、ユタ州専門の留学斡旋サービスです。語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポート。',
    type: 'website',
    url: 'https://utah-study-support.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Supportについて - ユタ州留学サポート',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Study Supportとは | 当社について',
    description: 'Utah Study Supportは、ユタ州専門の留学斡旋サービスです。語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポート。',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Utah Study Supportとは',
  description: '短期集中で英語力を確実に身につけるコーチングサービス。世界で活躍する日本人を増やすをミッションに掲げ、科学的なアプローチで効率的な学習を実現します。',
  url: 'https://utahstudysupport.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Utah Study Support',
    description: 'ユタ州専門の留学斡旋サービス。語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポート。',
    knowsAbout: ['英語学習', 'ユタ州留学', '語学学校', '留学サポート', 'TOEIC対策']
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Header currentPage="/about" />
      <Breadcrumb />
      <AboutClient />
      <Footer />
    </div>
  );
}