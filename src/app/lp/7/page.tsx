"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function LP7() {
  const [vslAnalytics, setVslAnalytics] = useState(null);
  const heroRef = useRef(null);
  const summaryRef = useRef(null);
  const pathsRef = useRef(null);
  const urgencyRef = useRef(null);
  const messageRef = useRef(null);
  const ctaRef = useRef(null);
  const finalRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const summaryInView = useInView(summaryRef, { once: true, margin: "-100px" });
  const pathsInView = useInView(pathsRef, { once: true, margin: "-100px" });
  const urgencyInView = useInView(urgencyRef, { once: true, margin: "-100px" });
  const messageInView = useInView(messageRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const finalInView = useInView(finalRef, { once: true, margin: "-100px" });

  const handleAnalyticsUpdate = (analytics) => {
    setVslAnalytics(analytics);
    console.log('LP7 VSL Analytics:', analytics);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/7" />
      <main>
        {/* VSL Section - 90秒まとめ動画 */}
        <VSLSection
          videoUrl="/videos/day7-summary-90sec.mp4"
          title="ここまでの要点 90秒まとめ動画"
          description="7日間で学んだ会議での即応力向上プログラムの全てを90秒でおさらい"
          onAnalyticsUpdate={handleAnalyticsUpdate}
        />

        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden"
          ref={heroRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6 py-20"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="text-center text-white">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="text-yellow-300">本日23:59で受付終了</span>
                <br />
                次回募集は未定です
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                会議での「即応力」を科学的に分解し、診断→処方→伴走→可視化で
                <br />
                12週間で業務英語を武器化する最後のチャンスです。
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Summary Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={summaryRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={summaryInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                プログラムの核心メカニズム
              </motion.h2>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={summaryInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-blue-50 rounded-lg p-8 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">音声知覚 × 音韻運動</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 個別診断で弱点を科学的に特定</li>
                  <li>• VERSANT B2レベルの聞き取り力強化</li>
                  <li>• 半導体業務特化の音韻パターン習得</li>
                  <li>• 音声AIフィードバックによる即座の改善</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 rounded-lg p-8 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-green-600 mb-4">会議スクリプト × 反射訓練</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 会議即応スクリプト集（半導体業務特化）</li>
                  <li>• ドリル形式の反射訓練で瞬発力向上</li>
                  <li>• 個別シャドーイング処方箋3ヶ月分</li>
                  <li>• 学会発表同時通訳リハーサル対応</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 rounded-lg p-8 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-purple-600 mb-4">週次1on1 × ダッシュボード</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 週次面談での個別コーチング</li>
                  <li>• 日次伴走による学習継続サポート</li>
                  <li>• 進捗可視化ダッシュボードで成長実感</li>
                  <li>• 上司共有用進捗レポートテンプレート</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-red-50 rounded-lg p-8 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-red-600 mb-4">実証された成果</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TOEIC 670→905、VERSANT B2到達実績</li>
                  <li>• 国際学会発表サポート成功事例</li>
                  <li>• 練習音声のBefore/After比較データ</li>
                  <li>• ダッシュボードの実測グラフによる可視化</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Paths Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={pathsRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={pathsInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                あなたは今、2つの道に立っています
              </motion.h2>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={pathsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-red-600 mb-4">❌ 現状維持の道</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 会議で英語が聞き取れず発言機会を逸する</li>
                  <li>• 国際プロジェクトでの存在感が薄い</li>
                  <li>• 昇進・昇格のチャンスが限定される</li>
                  <li>• 半導体業界のグローバル化に対応できない</li>
                  <li>• 学会発表や技術交流での機会損失</li>
                  <li>• 技術力があっても英語で評価されない</li>
                </ul>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700">
                    「技術はあるのに英語で損をしている...」
                    <br />
                    そんなエンジニアの声を数多く聞いています。
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-green-600 mb-4">✅ 12週間集中で変わる道</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 会議での即応力向上で発言機会が激増</li>
                  <li>• 国際プロジェクトでのリーダーシップ発揮</li>
                  <li>• 技術×英語で差別化されたキャリア構築</li>
                  <li>• 学会発表や技術論文での国際的評価</li>
                  <li>• グローバル企業での昇進・転職成功</li>
                  <li>• 半導体業界で真のエキスパートに</li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    「12週間で会議での存在感が劇的に変わった！」
                    <br />
                    それが受講生の共通体験です。
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="py-16 px-4 bg-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-600 text-white rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">⏰ 最終警告</h2>
              <div className="text-5xl font-bold mb-4" id="countdown-timer">
                残り 6時間 15分
              </div>
              <p className="text-xl">
                特別価格（660,000円→月々69,300円×10）での申込み締切まで
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                コーチ枠の空き状況
              </h3>
              <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400">8名</div>
                  <p className="text-gray-600">定員（少数制）</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">6名</div>
                  <p className="text-gray-600">申込み済み</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">2名</div>
                  <p className="text-red-600 font-semibold">残りコーチ枠</p>
                </div>
              </div>
              <p className="text-gray-700">
                個別コーチング品質維持のため少数精鋭制。枠が埋まると<strong>次回募集は未定</strong>です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              最後のFAQ - よくある質問
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-3">💳 支払い方法について</h3>
                <p className="text-gray-700 text-sm">
                  一括：660,000円（税込）<br/>
                  分割：月々69,300円×10回（実例）<br/>
                  クレジットカード・銀行振込対応
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-3">📅 開始日・スケジュール</h3>
                <p className="text-gray-700 text-sm">
                  週3時間×平日＋週末（計30時間/週）<br/>
                  申込後1週間以内にキックオフ<br/>
                  個別診断→処方→週次面談で進行
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-purple-800 mb-3">🔄 振替・調整について</h3>
                <p className="text-gray-700 text-sm">
                  週次面談は24時間前まで振替可能<br/>
                  日次伴走はチャット・音声で柔軟対応<br/>
                  学習ペースは個別に調整します
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-bold text-yellow-800 mb-3">💼 仕事との両立</h3>
                <p className="text-gray-700 text-sm">
                  業務時間外での学習設計<br/>
                  出張・繁忙期は学習量調整<br/>
                  上司報告用の進捗レポート提供
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">受講開始までの流れ</h3>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">1</div>
                  <h4 className="font-semibold">申込完了</h4>
                  <p className="text-sm text-gray-600">本日23:59まで</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">2</div>
                  <h4 className="font-semibold">事前課題</h4>
                  <p className="text-sm text-gray-600">現状レベル診断</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">3</div>
                  <h4 className="font-semibold">キックオフ</h4>
                  <p className="text-sm text-gray-600">個別処方箋作成</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-3">
                  🎁 全ボーナス特典（計15万円相当）
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-orange-700">
                  <div>①会議即応スクリプト集（半導体特化）</div>
                  <div>②個別シャドーイング処方箋3ヶ月分</div>
                  <div>③VERSANT対策リビルド講座</div>
                  <div>④上司共有用進捗レポートテンプレ</div>
                  <div>⑤学会発表同時通訳リハ30分×2</div>
                  <div>⑥受講中アプリ利用権（記録・可視化）</div>
                </div>
                <div className="mt-3 p-3 bg-red-50 rounded-lg">
                  <p className="text-red-700 font-semibold text-sm">
                    ✅ 14日満足保証付き（提出課題・出席条件満たす場合、全額返金）
                  </p>
                </div>
              </div>

              <Link href="/counseling" className="block mb-4">
                <motion.button 
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-2xl font-bold py-8 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 animate-pulse"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  今すぐ申し込む
                  <div className="text-lg font-normal mt-2">
                    ※ 本日23:59で締切、次回募集未定
                  </div>
                </motion.button>
              </Link>
              
              <Link href="/consultation" className="block mb-6">
                <motion.button 
                  className="w-full bg-gray-600 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  相談の空きを確認
                  <div className="text-sm font-normal mt-1">
                    迷いがある方は個別相談へ
                  </div>
                </motion.button>
              </Link>

              <div className="space-y-2 text-sm text-gray-600">
                <p>✅ 12週間集中コーチング（週3h×平日＋週末 計30h/w）</p>
                <p>✅ 個別診断・処方・週次面談・日次伴走</p>
                <p>✅ 音声AIフィードバック・ダッシュボード可視化</p>
                <p>✅ 定員8名（少数精鋭制）・14日満足保証</p>
                <p className="font-semibold text-red-600 mt-4">
                  ※ 本日23:59で受付終了、次回募集は未定
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              あなたの決断を待っています
            </h2>
            <p className="text-xl mb-8">
              12週間後、会議で堂々と発言するあなたが
              <br />
              「あの時、決断してよかった」と言えるように。
            </p>
            <div className="text-lg font-semibold text-yellow-400">
              最後のチャンスです。
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}