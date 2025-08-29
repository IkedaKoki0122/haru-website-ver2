"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { logger } from '@/utils/logger';

export default function SuccessPageClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<{
    id: string;
    payment_status: string;
    amount_total: number | null;
    currency: string;
    customer_email?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSession(data);
          setLoading(false);
        })
        .catch((error) => {
          logger.error('Failed to fetch checkout session details', error, { sessionId });
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">決済情報を確認しています...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-16 px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            お申し込みありがとうございます！
          </h1>
          
          <p className="text-gray-600 mb-8">
            決済が正常に完了いたしました。<br />
            Utah Study Supportコースへのお申し込みを受け付けました。
          </p>

          {session && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">決済詳細</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">決済ID:</span>
                  <span className="font-mono text-sm">{session.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">金額:</span>
                  <span>¥{session.amount_total?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">支払い方法:</span>
                  <span>クレジットカード</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4 text-sm text-gray-600 mb-8">
            <p>
              ご登録いただいたメールアドレスに確認メールをお送りしております。
            </p>
            <p>
              担当コンサルタントより3営業日以内にご連絡いたします。
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              ホームに戻る
            </Link>
            
            <p className="text-xs text-gray-500">
              ご不明な点がございましたら、カスタマーサポートまでお問い合わせください。
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}