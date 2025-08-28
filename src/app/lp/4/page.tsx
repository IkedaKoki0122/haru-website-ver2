"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LP4() {
  const [vslAnalytics, setVslAnalytics] = useState(null);
  const [remainingSeats, setRemainingSeats] = useState(3);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });
  
  const heroRef = useRef(null);
  const offerRef = useRef(null);
  const pricingRef = useRef(null);
  const bonusRef = useRef(null);
  const guaranteeRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const offerInView = useInView(offerRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const bonusInView = useInView(bonusRef, { once: true, margin: "-100px" });
  const guaranteeInView = useInView(guaranteeRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    console.log('LP4 VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/4" />
      <main>
        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day4-sales-offer.mp4"
          title="12週間集中コーチング - 特別オファー"
          description="会議で黙らない自分への変革を、今すぐ始めましょう"
          onAnalyticsUpdate={handleAnalyticsUpdate}
        />

        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden"
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                会議で黙らない自分へ。
                <br />
                <span className="text-yellow-300">12週間の集中伴走</span>で
                <br />
                「即応力」を装備する。
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                音声知覚 × 音韻運動 × 会議スクリプト × 反射訓練で<br />
                業務英語を武器化する科学的プログラム
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* オファー詳細セクション */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={offerRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={offerInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              variants={itemVariants}
            >
              12週間集中コーチング プログラム詳細
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-blue-50 rounded-lg p-8 shadow-sm border-l-4 border-blue-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">🎯 週次1on1面談</h3>
                <p className="text-gray-700 mb-4">
                  45分×12回の完全個別指導。あなたの進捗と課題を専門コーチが徹底分析し、
                  週次で学習プランを更新します。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 rounded-lg p-8 shadow-sm border-l-4 border-green-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-green-600 mb-4">💬 日次チャット伴走</h3>
                <p className="text-gray-700 mb-4">
                  平日毎日のチャットサポート。練習の疑問や会議での実践報告を
                  即座にフィードバックします。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 rounded-lg p-8 shadow-sm border-l-4 border-purple-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-purple-600 mb-4">🎤 音声AIフィードバック</h3>
                <p className="text-gray-700 mb-4">
                  発音・リズム・流暢性を無制限で診断。
                  VERSANT対策機能付きで客観的な改善データを可視化。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-orange-50 rounded-lg p-8 shadow-sm border-l-4 border-orange-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4">📊 ダッシュボード提供</h3>
                <p className="text-gray-700 mb-4">
                  練習時間・スコア推移・弱点分析を一目で確認。
                  上司との共有レポート機能も完備。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-red-50 rounded-lg p-8 shadow-sm border-l-4 border-red-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-red-600 mb-4">⚡ 個別処方プラン</h3>
                <p className="text-gray-700 mb-4">
                  あなたの業界・役職・弱点に特化したカスタムプラン。
                  週次で最適化し続けます。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-indigo-50 rounded-lg p-8 shadow-sm border-l-4 border-indigo-500"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-4">🔧 半導体領域特化</h3>
                <p className="text-gray-700 mb-4">
                  設計・品質・量産移管の実務会議スクリプト集。
                  業界特有の表現と即応フレーズを完全網羅。
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 価格セクション */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={pricingRef}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              variants={itemVariants}
            >
              投資とROI
            </motion.h2>
            
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-lg"
              variants={cardVariants}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">12週間集中コーチング</h3>
                <div className="text-gray-600 mb-6">
                  週3h×平日 + 週末合計 ~30h/w の集中トレーニング
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-600 mb-4">一括払い</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      660,000円
                    </div>
                    <div className="text-sm text-gray-600">
                      （税込・追加費用なし）
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-blue-50">
                    <h4 className="text-xl font-bold text-blue-600 mb-4">分割払い</h4>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      69,300円
                    </div>
                    <div className="text-sm text-gray-600">
                      月々×10回（税込）
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-green-700 mb-3">💰 簡易ROI計算</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>• 会議発言機会 3倍増 → 昇進・昇格確率向上</div>
                  <div>• 国際プロジェクト参画 → 年収+100-300万円</div>
                  <div>• 学会発表・論文発表機会 → キャリア価値向上</div>
                  <div className="font-semibold text-green-700 mt-4">
                    ※ 平均的に6-12ヶ月で投資回収を実現
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ボーナスセクション */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={bonusRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={bonusInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              variants={itemVariants}
            >
              🎁 特別ボーナス（合計価値 180,000円）
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-blue-600 text-2xl mb-3">📋</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">①会議即応スクリプト集</h3>
                <p className="text-sm text-gray-700 mb-3">
                  半導体業務特化の実務会議表現集
                </p>
                <div className="text-blue-600 font-semibold">価値: 30,000円</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-green-600 text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">②個別シャドーイング処方箋</h3>
                <p className="text-sm text-gray-700 mb-3">
                  3ヶ月分の音韻運動トレーニング
                </p>
                <div className="text-green-600 font-semibold">価値: 45,000円</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-purple-600 text-2xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">③VERSANT対策リビルド講座</h3>
                <p className="text-sm text-gray-700 mb-3">
                  スコア最適化の集中講座
                </p>
                <div className="text-purple-600 font-semibold">価値: 25,000円</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-orange-600 text-2xl mb-3">📊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">④進捗レポートテンプレ</h3>
                <p className="text-sm text-gray-700 mb-3">
                  上司共有用の専用レポート
                </p>
                <div className="text-orange-600 font-semibold">価値: 15,000円</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-red-600 text-2xl mb-3">🎤</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">⑤学会発表同時通訳リハ</h3>
                <p className="text-sm text-gray-700 mb-3">
                  30分×2回の専門指導
                </p>
                <div className="text-red-600 font-semibold">価値: 40,000円</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 shadow-sm"
                variants={cardVariants}
              >
                <div className="text-indigo-600 text-2xl mb-3">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">⑥受講中アプリ利用権</h3>
                <p className="text-sm text-gray-700 mb-3">
                  記録・可視化・分析機能
                </p>
                <div className="text-indigo-600 font-semibold">価値: 25,000円</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 保証セクション */}
        <motion.section 
          className="py-16 bg-green-50 overflow-hidden"
          ref={guaranteeRef}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={guaranteeInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-500"
              variants={cardVariants}
            >
              <div className="text-center">
                <div className="text-green-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">14日満足保証</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  プログラム開始から14日以内であれば、提出課題と出席が一定条件を満たす場合、
                  理由を問わず全額返金いたします。
                </p>
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">返金条件:</h4>
                  <ul className="text-sm text-green-700 text-left space-y-1">
                    <li>• 週次1on1面談への参加（2回以上）</li>
                    <li>• 指定課題の提出（70%以上）</li>
                    <li>• 日次練習記録の報告</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 希少性・緊急性セクション */}
        <motion.section 
          className="py-8 bg-red-50 border-l-4 border-red-500 overflow-hidden"
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-700 mb-4">⚠️ 残席わずか・申込締切迫る</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">残席数</h4>
                  <div className="text-3xl font-bold text-red-600">{remainingSeats}席</div>
                  <div className="text-sm text-gray-600">/ 月間定員8席</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">申込締切まで</h4>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">{timeLeft.days}</div>
                      <div className="text-xs text-gray-600">日</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-600">時間</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-600">分</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-600">秒</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTAセクション */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden"
          ref={ctaRef}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl font-bold mb-8"
              variants={itemVariants}
            >
              会議で黙らない自分への変革を、今すぐ始める
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/counseling" 
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
                >
                  🚀 今すぐ申し込む
                  <div className="text-sm font-normal mt-1">
                    12週間集中コーチング
                  </div>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  href="/counseling" 
                  className="block w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg border-2 border-white"
                >
                  📅 日程を選んで相談
                  <div className="text-sm font-normal mt-1">
                    無料個別カウンセリング
                  </div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-lg opacity-90"
              variants={itemVariants}
            >
              あなたの「即応力」革命は、この瞬間から始まります。
            </motion.p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}