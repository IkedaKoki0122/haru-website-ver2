import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Utah Study Support | アメリカ留学・語学学校サポート",
    template: "%s | Utah Study Support"
  },
  description: "ユタ州での留学・語学学校選びをサポート。豊富な学校情報と現地サポートでアメリカ留学を成功に導きます。",
  metadataBase: new URL('https://utah-study-support.com'),
  keywords: ["アメリカ留学", "ユタ州", "語学学校", "留学サポート", "英語学習", "海外留学"],
  authors: [{ name: "Utah Study Support" }],
  creator: "Utah Study Support",
  publisher: "Utah Study Support",
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://utah-study-support.com',
    title: 'Utah Study Support | アメリカ留学・語学学校サポート',
    description: 'ユタ州での留学・語学学校選びをサポート。豊富な学校情報と現地サポートでアメリカ留学を成功に導きます。',
    siteName: 'Utah Study Support',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Study Support - アメリカ留学サポート',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Study Support | アメリカ留学・語学学校サポート',
    description: 'ユタ州での留学・語学学校選びをサポート。豊富な学校情報と現地サポートでアメリカ留学を成功に導きます。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Utah Study Support" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <ErrorBoundary>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
