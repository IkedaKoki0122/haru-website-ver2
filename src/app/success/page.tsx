import { Metadata } from 'next';
import SuccessPageClient from './success-client';

export const metadata: Metadata = {
  title: '決済完了 - 英語習得研究所',
  description: 'お申し込みありがとうございます。決済が正常に完了いたしました。',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return <SuccessPageClient />;
}
