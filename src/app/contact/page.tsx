import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: 'お問い合わせ | Utah Study Support',
  description: 'ユタ州留学に関するご質問、語学学校選びのご相談、現地サポートについてなど、Utah Study Supportへのお問い合わせはこちらから。専門スタッフが丁寧にお答えします。',
  keywords: ['Utah Study Support', 'お問い合わせ', 'ユタ州留学', '語学学校相談', '現地サポート', '留学相談'],
  openGraph: {
    title: 'お問い合わせ | Utah Study Support',
    description: 'ユタ州留学に関するご質問、語学学校選びのご相談、現地サポートについてなど、Utah Study Supportへのお問い合わせはこちらから。',
    type: 'website',
    url: 'https://utah-study-support.com/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support お問い合わせ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | Utah Study Support',
    description: 'ユタ州留学に関するご質問、語学学校選びのご相談、現地サポートについてなど、Utah Study Supportへのお問い合わせはこちらから。',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/contact" />
      <Breadcrumb />
      <ContactClient />
      <Footer />
    </div>
  );
}