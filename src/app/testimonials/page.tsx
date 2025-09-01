import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "利用者の声 | Utah Study Support",
  description:
    "Utah Study Supportを利用してユタ州留学を実現された方々の体験談をご紹介。学校選び、ビザ申請、現地サポートまで、実際の留学生の声をお聞きください。",
  keywords: [
    "Utah Study Support",
    "利用者の声",
    "ユタ州留学体験談",
    "留学斡旋",
    "語学学校",
    "留学サポート",
    "口コミ",
    "留学エージェント",
  ],
  openGraph: {
    title: "利用者の声 | Utah Study Support",
    description:
      "Utah Study Supportを利用してユタ州留学を実現された方々の体験談。学校選びから現地生活まで、実際の留学生の声をご紹介。",
    type: "website",
    url: "https://utah-study-support.com/testimonials",
    images: [
      {
        url: "/og-testimonials.jpg",
        width: 1200,
        height: 630,
        alt: "Utah Study Support 利用者の声",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "利用者の声 | Utah Study Support",
    description:
      "Utah Study Supportを利用してユタ州留学を実現された方々の体験談。学校選びから現地生活まで、実際の留学生の声をご紹介。",
    images: ["/og-testimonials.jpg"],
  },
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/testimonials" />
      <Breadcrumb />
      <main>
        <TestimonialsClient />
      </main>
      <Footer />
    </div>
  );
}
