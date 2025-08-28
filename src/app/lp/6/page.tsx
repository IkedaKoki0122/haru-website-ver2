"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LP6() {
  const [vslAnalytics, setVslAnalytics] = useState(null);

  const handleAnalyticsUpdate = (analytics) => {
    setVslAnalytics(analytics);
    console.log('LP6 VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/6" />
      <main>
        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day6-price-reveal.mp4"
          title="英会話コーチング特別価格と限定特典を発表"
          description="今回のみの英会話コーチング特別価格と、再現性のない限定特典をご紹介します"
          onAnalyticsUpdate={handleAnalyticsUpdate}
        />

        {/* Day 6: 価格発表・特典・緊急性 */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-600">期間限定</span>
              特別オファー発表！
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              この機会を逃すと、二度と同じ条件では受講できません。
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              プログラム詳細・料金
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  プロフェッショナル・コーディング・マスタープログラム
                </h3>
                <p className="text-lg text-gray-700">
                  6ヶ月完全個別指導 + 生涯サポート
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-xl font-bold text-purple-600 mb-4">含まれるもの</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ 現役エンジニアによる完全1対1指導</li>
                    <li>✅ 個別カリキュラム作成</li>
                    <li>✅ 24時間質問サポート</li>
                    <li>✅ 実践プロジェクト開発（3-5個）</li>
                    <li>✅ ポートフォリオ作成サポート</li>
                    <li>✅ 面接対策・企業紹介</li>
                    <li>✅ 卒業後の継続サポート（1年間）</li>
                    <li>✅ 同期生コミュニティ参加権</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-4">特別特典</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎁 最新技術セミナー参加権（月1回）</li>
                    <li>🎁 現役エンジニアとの懇談会招待</li>
                    <li>🎁 転職成功で祝い金10万円</li>
                    <li>🎁 AWS資格取得サポート</li>
                    <li>🎁 フリーランス案件紹介</li>
                    <li>🎁 開発環境構築代行</li>
                    <li>🎁 個別キャリア相談（無制限）</li>
                    <li>🎁 卒業生ネットワーク参加権</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 価格比較 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">料金比較</h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-600 mb-4">他社平均</h4>
                    <div className="text-3xl font-bold text-gray-600 mb-2">65万円</div>
                    <p className="text-sm text-gray-500">
                      • グループ学習<br/>
                      • 3-4ヶ月固定<br/>
                      • 限定的サポート
                    </p>
                  </div>
                  
                  <div className="text-center p-6 border-2 border-red-500 rounded-lg relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      通常価格
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 mt-4">当プログラム</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-2 line-through">58万円</div>
                    <p className="text-sm text-gray-700">
                      • 完全個別指導<br/>
                      • 6ヶ月+継続サポート<br/>
                      • 充実した特典
                    </p>
                  </div>
                  
                  <div className="text-center p-6 border-4 border-orange-500 rounded-lg relative bg-gradient-to-br from-orange-50 to-yellow-50">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      特別価格
                    </div>
                    <h4 className="text-lg font-bold text-orange-600 mb-4 mt-4">期間限定</h4>
                    <div className="text-4xl font-bold text-orange-600 mb-2">48万円</div>
                    <div className="text-lg font-bold text-green-600 mb-2">10万円OFF!</div>
                    <p className="text-sm text-orange-700 font-semibold">
                      • 全て込み価格<br/>
                      • 分割払い対応<br/>
                      • 満足保証付き
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 分割払いオプション */}
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                お支払いオプション
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <h4 className="font-bold text-blue-600 mb-2">一括払い</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">48万円</div>
                  <p className="text-sm text-green-600">さらに5万円割引適用</p>
                  <div className="text-lg font-bold text-orange-600">実質43万円</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border-2 border-blue-500">
                  <h4 className="font-bold text-blue-600 mb-2">6回分割</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">8万円/月</div>
                  <p className="text-sm text-gray-600">× 6ヶ月</p>
                  <div className="text-sm text-blue-600 font-semibold mt-2">最も人気</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h4 className="font-bold text-blue-600 mb-2">12回分割</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">4.2万円/月</div>
                  <p className="text-sm text-gray-600">× 12ヶ月</p>
                  <div className="text-sm text-gray-600">手数料込み</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 緊急性・限定性 */}
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                ⚠️ 重要なお知らせ
              </h3>
              <div className="text-red-700">
                <p className="mb-2">
                  <strong>この特別価格は48時間限定です。</strong>
                </p>
                <p className="mb-2">
                  現在のメンター体制では、月に<strong>最大5名</strong>しか受け入れできません。
                </p>
                <p>
                  今月の残り枠は<strong class="text-2xl">あと2名</strong>のみとなっております。
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">申込み締切まで</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">
                  残り 1日 23時間 45分
                </div>
                <p className="text-gray-700">
                  ※締切後は通常価格（58万円）での受付となります
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/counseling" className="block">
                  <motion.button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    今すぐ無料カウンセリングを予約する
                    <div className="text-sm font-normal mt-2">
                      ↓ 特別価格適用まであと1ステップ ↓
                    </div>
                  </motion.button>
                </Link>
                <p className="text-sm text-gray-600">
                  ※無料カウンセリング後の入会で特別価格が適用されます<br/>
                  ※強引な勧誘は一切行いません
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              よくある質問
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Q. 本当に未経験でも大丈夫ですか？</h4>
                <p className="text-gray-700">
                  A. はい。受講生の80%が完全未経験からスタートしています。
                  個別カリキュラムで、あなたのペースに合わせて学習を進めるので安心してください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Q. 働きながらでも受講できますか？</h4>
                <p className="text-gray-700">
                  A. 可能です。平日夜間や土日を活用して学習している方が多数います。
                  週15-20時間の学習時間を確保していただければ、十分に習得可能です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Q. 本当に転職できるか不安です...</h4>
                <p className="text-gray-700">
                  A. 95%の受講生が転職に成功しています。万が一転職できなかった場合は、
                  転職が決まるまで無期限でサポートを継続します。（転職保証制度）
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">明日の予告</h2>
            <p className="text-xl mb-8">
              「申込み最終日・ラストチャンス」
              <br />
              最後のメッセージをお届けします。
            </p>
            <div className="bg-white text-orange-600 rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold">
                もう迷っている時間はありません。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}