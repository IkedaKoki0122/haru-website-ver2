import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import TopicsContent from "./TopicsContent";

export const metadata: Metadata = {
  title: "ニュース・トピックス | Utah Study Support",
  description:
    "ユタ州留学に関する最新ニュースや情報をお届けします。大学入学サポート、住居情報、ビザ申請手続き、学生体験談など、Utah Study Supportの最新情報をチェックしてください。",
  keywords: [
    "Utah Study Support",
    "ユタ州留学ニュース",
    "トピックス",
    "留学情報",
    "大学入学サポート",
    "住居情報",
    "ビザ申請",
    "体験談",
  ],
  openGraph: {
    title: "ニュース・トピックス | Utah Study Support",
    description:
      "ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談などの最新情報。",
    type: "website",
    url: "https://utah-study-support.com/topics",
    images: [
      {
        url: "/og-topics.jpg",
        width: 1200,
        height: 630,
        alt: "Utah Study Support ニュース・トピックス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ニュース・トピックス | Utah Study Support",
    description:
      "ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談などの最新情報。",
    images: ["/og-topics.jpg"],
  },
  alternates: {
    canonical: "/topics",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ユタ州留学ニュース・トピックス",
  description:
    "ユタ州留学に関する最新ニュースや情報をお届け。大学入学サポート、住居情報、ビザ申請手続き、学生体験談など役立つ情報が満載です。",
  url: "https://utahstudysupport.com/topics",
  publisher: {
    "@type": "Organization",
    name: "Utah Study Support",
    url: "https://utahstudysupport.com",
  },
  inLanguage: "ja",
};

export default function Topics() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header currentPage="/topics" />
      <Breadcrumb />
      <TopicsContent />
      <Footer />
    </div>
  );
}
