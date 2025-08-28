"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import VSLSection from "../../../components/VSLSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

export default function LP2() {
  const [vslAnalytics, setVslAnalytics] = useState(null);
  
  const heroRef = useRef(null);
  const secretsRef = useRef(null);
  const successRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const secretsInView = useInView(secretsRef, { once: true, margin: "-100px" });
  const successInView = useInView(successRef, { once: true, margin: "-100px" });
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
    console.log('VSL Analytics:', analytics);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/lp/2" />
      <main>
        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-red-500 to-red-600 overflow-hidden"
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
                努力しても"話せない"のは、
                <br />
                <span className="text-yellow-300">あなたのせいではありません。</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8"
                variants={itemVariants}
              >
                毎日勉強しているのに成果が出ない…。
                <br />
                それは<span className="font-bold text-yellow-300">"間違ったトレーニング"を続けているから</span>かもしれません。
              </motion.p>
              <motion.div 
                className="mt-8"
                variants={itemVariants}
              >
                <button className="bg-yellow-400 text-red-600 px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors font-bold text-lg shadow-lg">
                  ▶ Day2の無料動画を見る
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Problem Structure Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          ref={secretsRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={secretsInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                問題の構造を解き明かす
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                多くの日本人が抱える「話せない」悩み。
                <br />
                実は、その原因は<span className="font-bold text-red-600">３つの落とし穴</span>にあります。
              </motion.p>
            </div>

            {/* Problem 1: インプット偏重学習 */}
            <motion.div 
              className="mb-16 bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8"
              variants={cardVariants}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 mb-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    インプット偏重学習
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    読解や文法ばかりで、音声認識・瞬発力を鍛えていない。
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 単語帳や文法書中心の学習</li>
                    <li>• 音声練習の圧倒的不足</li>
                    <li>• 実際の会話での応答練習なし</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <p className="text-sm text-gray-600 mb-4">学習時間配分</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">読解・文法</span>
                        <span className="text-red-600 font-bold">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">音声練習</span>
                        <span className="text-red-600 font-bold">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">実践練習</span>
                        <span className="text-red-600 font-bold">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Problem 2: 実践不足 */}
            <motion.div 
              className="mb-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8"
              variants={cardVariants}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏫</div>
                    <p className="text-sm text-gray-600 mb-4">学習環境の現実</p>
                    <div className="space-y-3">
                      <div className="bg-orange-100 rounded p-2">
                        <p className="text-xs font-semibold">教室</p>
                        <p className="text-xs">準備された質問・優しい環境</p>
                      </div>
                      <div className="text-xs text-center">vs</div>
                      <div className="bg-red-100 rounded p-2">
                        <p className="text-xs font-semibold">実際の会議</p>
                        <p className="text-xs">急な質問・プレッシャー</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-16 h-16 mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    実践不足
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "安全な教室"で練習するだけで、仕事で使う即応力が育たない。
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 準備された質問のみの練習</li>
                    <li>• プレッシャー下での発話経験不足</li>
                    <li>• 業務シーンの再現不足</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Problem 3: 伴走不在 */}
            <motion.div 
              className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8"
              variants={cardVariants}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    伴走不在
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    独学では「正しくできているのか」分からず、誤った習慣を強化してしまう。
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 発音・イントネーションの自己チェック困難</li>
                    <li>• 間違いを修正する機会なし</li>
                    <li>• 個人の弱点特定ができない</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔄</div>
                    <p className="text-sm text-gray-600 mb-4">独学の悪循環</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-blue-100 rounded p-2">
                        <p>間違った方法で練習</p>
                      </div>
                      <div className="text-center">↓</div>
                      <div className="bg-blue-100 rounded p-2">
                        <p>成果が出ない</p>
                      </div>
                      <div className="text-center">↓</div>
                      <div className="bg-red-100 rounded p-2">
                        <p>さらに間違った方法を強化</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* VSL Section */}
        <VSLSection
          videoUrl="/videos/day2-problem-analysis.mp4"
          title="Day2: 努力しても話せない本当の理由"
          description="なぜ多くの日本人が英語で挫折するのか、その根本原因を解き明かします"
        />

        {/* Failure Patterns Section */}
        <motion.section 
          className="py-16 bg-gray-50 overflow-hidden"
          ref={successRef}
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={successInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                失敗パターンの共感
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                例えば…
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pattern 1 */}
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-red-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😔</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    TOEIC900でも沈黙
                  </h3>
                </div>
                <p className="text-gray-700 text-center mb-4">
                  TOEIC900を取っても、会議で沈黙してしまう。
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-700">
                    「読解は得意だけど、とっさに言葉が出てこない…」
                  </p>
                </div>
              </motion.div>

              {/* Pattern 2 */}
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-orange-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😵‍💫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    シャドーイングで伸び悩み
                  </h3>
                </div>
                <p className="text-gray-700 text-center mb-4">
                  シャドーイングをしても、自己流で伸び悩む。
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-700">
                    「毎日やってるのに、正しくできているかわからない…」
                  </p>
                </div>
              </motion.div>

              {/* Pattern 3 */}
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-blue-200"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😐</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    雑談はできてもビジネスは…
                  </h3>
                </div>
                <p className="text-gray-700 text-center mb-4">
                  英会話スクールに通っても、雑談はできてもビジネスに直結しない。
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    「日常会話はできるのに、会議では役に立たない…」
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Message */}
            <motion.div 
              className="mt-16 text-center"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  「努力しても成果が出ない」のは、あなたが悪いのではなく、
                </h3>
                <p className="text-xl">
                  <span className="bg-yellow-400 text-red-600 px-4 py-2 rounded-full font-bold">
                    システムが間違っているから
                  </span>
                  なのです。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Scientific Explanation Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
        >
          <motion.div 
            className="max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                原因を科学的に説明
              </motion.h2>
            </div>

            {/* 4 Skills Diagram */}
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                英語力には大きく分けて４つのスキルがあります
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h4 className="font-bold text-blue-600 mb-2">リーディング</h4>
                  <p className="text-sm text-gray-600">（読む）</p>
                  <div className="mt-3 bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    日本で強化済み
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✏️</span>
                  </div>
                  <h4 className="font-bold text-green-600 mb-2">ライティング</h4>
                  <p className="text-sm text-gray-600">（書く）</p>
                  <div className="mt-3 bg-green-500 text-white px-3 py-1 rounded text-xs">
                    日本で強化済み
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm border-2 border-red-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👂</span>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">リスニング</h4>
                  <p className="text-sm text-gray-600">（聞く）</p>
                  <div className="mt-3 bg-red-500 text-white px-3 py-1 rounded text-xs">
                    土台未完成
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm border-2 border-red-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🗣️</span>
                  </div>
                  <h4 className="font-bold text-red-600 mb-2">スピーキング</h4>
                  <p className="text-sm text-gray-600">（話す）</p>
                  <div className="mt-3 bg-red-500 text-white px-3 py-1 rounded text-xs">
                    土台未完成
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Insight */}
            <motion.div 
              className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-12"
              variants={cardVariants}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  日本の英語教育は<span className="text-red-600">リーディング・ライティング偏重</span>
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  そのため、社会人になって急に「話す・聞く」を求められても、土台ができていないのです。
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🏫 学校教育の時間配分</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">文法・読解</span>
                          <span className="font-bold text-blue-600">70%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">単語暗記</span>
                          <span className="font-bold text-green-600">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">音声練習</span>
                          <span className="font-bold text-red-600">10%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">💼 実際の業務で必要</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">即座の理解・応答</span>
                          <span className="font-bold text-red-600">60%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">文書理解</span>
                          <span className="font-bold text-blue-600">25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">文章作成</span>
                          <span className="font-bold text-green-600">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Brain Science */}
            <motion.div 
              className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8"
              variants={cardVariants}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  さらに、脳科学的にも「即応力」は
                </h3>
                <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-purple-600">正しい反復 + フィードバック</h4>
                      <p className="text-sm text-gray-600">がなければ強化されません</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    独学では「正しい方向性」も「客観的フィードバック」も得られないため、
                    <br />
                    どれだけ努力しても神経回路が効率的に強化されないのです。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Bridge to Day 3 Section */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden"
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
              次へのブリッジ
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              このように、あなたが話せないのは<span className="font-bold text-yellow-300">努力不足ではなく、方法の問題</span>です。
              <br />
              そして、正しい方法を取れば、誰でも短期間で「聞ける・話せる」力は伸ばせます。
            </motion.p>
            <motion.div 
              className="bg-white text-blue-600 rounded-lg p-6 inline-block shadow-lg mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-2">
                Day3の動画では、
              </h3>
              <p className="text-lg">
                <span className="bg-yellow-400 text-blue-600 px-3 py-1 rounded font-bold">
                  「どうすれば短期間で即応力を鍛えられるのか？」
                </span>
              </p>
              <p className="text-sm mt-2 text-gray-600">
                その具体的なソリューションを公開します。
              </p>
            </motion.div>
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <button className="bg-yellow-400 text-blue-600 px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors font-bold text-lg shadow-lg mb-4">
                ▶ Day2の無料動画を見る
              </button>
              <p className="text-sm opacity-90">
                ※登録すると、自動的にDay3の特別レッスンも届きます
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}