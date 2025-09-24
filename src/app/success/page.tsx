import { Metadata } from "next";
import { Suspense } from "react";
import SuccessPageClient from "./success-client";

export const metadata: Metadata = {
  title: "決済完了 - Utah Study Support",
  description: "お申し込みありがとうございます。決済が正常に完了いたしました。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </div>
        </div>
      }
    >
      <SuccessPageClient />
    </Suspense>
  );
}
