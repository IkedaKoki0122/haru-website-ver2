"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Company() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/company" />

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        {/* Page Header */}
        <motion.section 
          className="bg-gray-50 py-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                会社概要
              </motion.h1>
              <motion.p 
                className="text-gray-600 max-w-3xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Utah Study Supportは、本気で英語を身につけたい方を全力でサポートする英語コーチングサービスです。
                科学的なアプローチと専属コンサルタントによるサポートで、短期間での英語力向上を実現します。
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Company Information */}
        <motion.section 
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <motion.h2 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  会社情報
                </motion.h2>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      会社名
                    </div>
                    <div className="text-sm text-gray-900">
                      株式会社Utah Study Support
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      英文社名
                    </div>
                    <div className="text-sm text-gray-900">
                      Utah Study Support Inc.
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      設立
                    </div>
                    <div className="text-sm text-gray-900">
                      2016年9月
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      資本金
                    </div>
                    <div className="text-sm text-gray-900">
                      1億円
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      代表取締役
                    </div>
                    <div className="text-sm text-gray-900">
                      岡田祥吾
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      従業員数
                    </div>
                    <div className="text-sm text-gray-900">
                      250名（2024年1月現在）
                    </div>
                  </div>
                  <div className="flex border-b border-gray-200 pb-4">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      本社所在地
                    </div>
                    <div className="text-sm text-gray-900">
                      〒100-0006<br />
                      東京都千代田区有楽町1-2-2<br />
                      東宝日比谷ビル7階
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                      事業内容
                    </div>
                    <div className="text-sm text-gray-900">
                      英語コーチングサービス「Utah Study Support」の運営<br />
                      法人向け英語研修サービスの提供<br />
                      教育コンテンツの企画・開発
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.h2 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  沿革
                </motion.h2>
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2016年
                    </div>
                    <div className="text-sm text-gray-900">
                      株式会社Utah Study Support設立<br />
                      英語コーチングサービス「Utah Study Support」開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2017年
                    </div>
                    <div className="text-sm text-gray-900">
                      新宿校開校<br />
                      法人向けサービス開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2018年
                    </div>
                    <div className="text-sm text-gray-900">
                      渋谷校、池袋校開校<br />
                      オンラインコース開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2019年
                    </div>
                    <div className="text-sm text-gray-900">
                      横浜校、有楽町校開校<br />
                      TOEFL iBTコース開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2020年
                    </div>
                    <div className="text-sm text-gray-900">
                      神田秋葉原校開校<br />
                      完全オンライン対応開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                      2024年
                    </div>
                    <div className="text-sm text-gray-900">
                      受講者数累計20,000名突破<br />
                      AI学習システム導入
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                ミッション・ビジョン
              </motion.h2>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ x: -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-xl font-bold text-orange-500 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  ミッション
                </motion.h3>
                <motion.p 
                  className="text-gray-700 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                  世界で自由に活躍できる人を増やす
                </motion.p>
                <motion.p 
                  className="text-gray-600 text-sm mt-4 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  英語力の向上を通じて、一人ひとりが世界を舞台に自分らしく活躍できる社会の実現を目指しています。
                </motion.p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ x: 50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-xl font-bold text-orange-500 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                  ビジョン
                </motion.h3>
                <motion.p 
                  className="text-gray-700 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  世界No.1の英語コーチングサービスへ
                </motion.p>
                <motion.p 
                  className="text-gray-600 text-sm mt-4 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  科学的なアプローチと最高品質のサービスで、英語学習の新しいスタンダードを創造し続けます。
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Access */}
        <motion.section 
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              アクセス
            </motion.h2>
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                本社（有楽町校）
              </motion.h3>
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>住所：</strong>東京都千代田区有楽町1-2-2 東宝日比谷ビル7階</p>
                    <p><strong>最寄り駅：</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• JR山手線・京浜東北線「有楽町駅」徒歩2分</li>
                      <li>• 東京メトロ丸ノ内線・日比谷線・千代田線「銀座駅」徒歩3分</li>
                      <li>• 東京メトロ有楽町線「有楽町駅」徒歩1分</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gray-200 h-48 rounded-lg flex items-center justify-center"
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <span className="text-gray-500">地図</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          className="py-16 bg-orange-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              お問い合わせ
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Utah Study Supportに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.button 
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 font-medium"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                無料カウンセリングに申し込む
              </motion.button>
              <motion.button 
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white font-medium"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              >
                資料請求
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}