"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function LP5() {
  const [vslAnalytics, setVslAnalytics] = useState(null);

  const heroRef = useRef(null);
  const casesRef = useRef(null);
  const resultsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const casesInView = useInView(casesRef, { once: true, margin: "-100px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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

  const handleAnalyticsUpdate = (analytics) => {
    setVslAnalytics(analytics);
    console.log('LP5 VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/5" />
      <main>
        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day5-deep-dive.mp4"
          title="なぜ伸びるのかを、教材ごとに公開します。"
          description="コーチの専門性と仕組みの透明性を可視化。12週間で業務英語を武器化する科学的アプローチをすべて明かします。"
          onAnalyticsUpdate={handleAnalyticsUpdate}
        />

        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden"
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
                なぜ伸びるのかを、
                <span className="text-yellow-300">教材ごとに公開</span>します。
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                会議での「即応力」を科学的に分解し、診断→処方→伴走→可視化で12週間で業務英語を武器化。
                <br />
                コーチの専門性と仕組みの透明性をすべて可視化します。
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* シラバス Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={casesRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                シラバス（週ごとの到達目標）
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                12週間でどのように成長するのか、具体的な週次目標を公開します。
              </motion.p>
            </div>
            
            <motion.div 
              className="grid lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={casesInView ? "visible" : "hidden"}
            >
              {/* Week 1-4 */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Week 1-4</h3>
                  <p className="text-blue-600 font-semibold">診断・基盤構築フェーズ</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>音声知覚診断（ネイティブ音声認識率測定）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>音韻運動システム個別処方箋作成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>半導体業務特化スクリプト100パターン習得</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>基本反射訓練（週15時間）</span>
                  </li>
                </ul>
              </motion.div>

              {/* Week 5-8 */}
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Week 5-8</h3>
                  <p className="text-green-600 font-semibold">実践・強化フェーズ</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>会議シミュレーション（模擬国際会議）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>VERSANT対策リビルド講座</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>週次1on1コーチング（進捗分析）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>音声AIフィードバック活用強化</span>
                  </li>
                </ul>
              </motion.div>

              {/* Week 9-12 */}
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Week 9-12</h3>
                  <p className="text-purple-600 font-semibold">完成・発表フェーズ</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>学会発表同時通訳リハーサル</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>上司共有用進捗レポート作成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>最終実力測定（TOEIC・VERSANT）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>継続学習プラン設計</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 教材サンプル Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={resultsRef}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                教材サンプル（音声・台本・チェックリスト）
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                実際の教材を公開し、なぜ効果があるのかを明かにします。
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={resultsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎧 音声知覚訓練サンプル</h3>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 mb-2">「ネイティブ音声認識率測定テスト」</p>
                  <audio controls className="w-full">
                    <source src="/audio/sample-perception-test.mp3" type="audio/mpeg" />
                  </audio>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 半導体業界特有の音素パターンを特定</li>
                  <li>• 個人別に苦手な音を特定し処方作成</li>
                  <li>• 1週間で聴取率が15%向上</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">📝 会議スクリプトサンプル</h3>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">「緒論・反対・提案」3パターン</p>
                  <div className="text-xs text-gray-700">
                    <p>• "I'd like to propose an alternative approach..."</p>
                    <p>• "While I understand your perspective, there might be..."</p>
                    <p>• "Building on that idea, we could also consider..."</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 半導体業務で頻出100パターンを網羅</li>
                  <li>• 反射的に出るまで繰り返し練習</li>
                  <li>• 会議での発言回数が3倍に増加</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">📈 進捗ダッシュボード</h3>
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <img src="/api/placeholder/300/150" alt="ダッシュボードサンプル" className="w-full rounded" />
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 毎日の練習時間、精度、成長曲線を可視化</li>
                  <li>• VERSANTスコア予測、TOEICスコア連動</li>
                  <li>• 上司への報告用レポート自動生成</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎆 実際の成果サンプル</h3>
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-semibold">受講前</p>
                      <p>TOEIC: 670</p>
                      <p>VERSANT: C1未満</p>
                    </div>
                    <div>
                      <p className="font-semibold">受講後</p>
                      <p>TOEIC: 905</p>
                      <p>VERSANT: B2達成</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 12週間でTOEIC 235ポイントアップ</li>
                  <li>• 国際学会での英語発表成功</li>
                  <li>• 音声フィードバックでBefore/Afterを数値化</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* コーチプロフィール Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                コーチプロフィール（研究領域／支援実績／評価）
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="grid lg:grid-cols-2 gap-8 items-center"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.div variants={cardVariants}>
                <img src="/api/placeholder/400/300" alt="コーチプロフィール" className="rounded-xl shadow-lg" />
              </motion.div>
              
              <motion.div variants={cardVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">田中 裕太郎（主任コーチ）</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">研究領域</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 应用音声学博士（東京大学）</li>
                      <li>• 第二言語習得理論専門家</li>
                      <li>• 音韻運動システム研究歳15年</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">支援実績</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 受講生総数1,200名サポート</li>
                      <li>• VERSANT B2達成率 89%</li>
                      <li>• 国際学会発表成功 150件</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">受講者評価</h4>
                    <p className="text-sm bg-gray-50 rounded-lg p-3">
                      「科学的根拠に基づいた指導で、短期間で大きな成果が出た。特に音韻運動の個別指導が素晴らしい」
                      <span className="block text-right mt-2 text-xs text-gray-600">― 半導体エンジニア Aさん</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 受講者の1日のスケジュール Section */}
        <motion.section 
          className="py-16 bg-blue-50 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                受講者の1日のスケジュール例（平日・休日）
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="grid lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">📅 平日スケジュール</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">06:30-07:00</span>
                    <span className="text-sm">音韻運動ドリル（30分）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">12:00-12:30</span>
                    <span className="text-sm">ランチタイムシャドーイング</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">19:00-20:30</span>
                    <span className="text-sm">会議スクリプト練習（90分）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">21:00-21:15</span>
                    <span className="text-sm">日次進捗記録・反射練習</span>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800">合計：約180分/日（主に早朝・夜の隠隙時間を活用）</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-green-600 mb-4">🏡 休日スケジュール</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">09:00-11:00</span>
                    <span className="text-sm">集中音声知覚訓練（120分）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">14:00-15:00</span>
                    <span className="text-sm">1on1コーチング（オンライン）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">16:00-17:30</span>
                    <span className="text-sm">会議シミュレーション実習</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">20:00-20:30</span>
                    <span className="text-sm">週次振り返り・翌週目標設定</span>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800">合計：約300分/週末（集中的なスキルアップタイム）</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden"
          ref={ctaRef}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              サポート体制（返信SLA・添削回数・緒急対応）
            </motion.h2>
            <motion.div 
              className="bg-white text-gray-800 rounded-lg p-8 mb-8"
              variants={itemVariants}
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-bold text-blue-600 mb-2">返信SLA</h3>
                  <p className="text-2xl font-bold mb-2">2時間以内</p>
                  <p className="text-sm text-gray-600">平日・土日 9:00-21:00</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-600 mb-2">添削回数</h3>
                  <p className="text-2xl font-bold mb-2">無制限</p>
                  <p className="text-sm text-gray-600">音声ファイル・練習記録すべて</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-600 mb-2">緒急対応</h3>
                  <p className="text-2xl font-bold mb-2">24時間以内</p>
                  <p className="text-sm text-gray-600">学会発表・重要会議前</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors mr-4">
                相談を予約する
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                申し込みに進む
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}