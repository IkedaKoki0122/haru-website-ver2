"use client";
import { motion } from "framer-motion";

export default function CompanyClient() {
  return (
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
              事業概要
            </motion.h1>
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Utah Study Supportは、ユタ州専門の留学斡旋個人事業として、あなたのユタ留学の夢を全力でサポートいたします。
              語学学校選びから住居手配、現地生活サポートまで、ワンストップで留学生活をトータルサポートします。
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
                事業者情報
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
                    屋号
                  </div>
                  <div className="text-sm text-gray-900">
                    Utah Study Support
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    英文屋号
                  </div>
                  <div className="text-sm text-gray-900">
                    Utah Study Support
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    開業
                  </div>
                  <div className="text-sm text-gray-900">
                    2016年9月
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    事業主
                  </div>
                  <div className="text-sm text-gray-900">
                    岡田祥吾
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    所在地
                  </div>
                  <div className="text-sm text-gray-900">
                    〒100-0006<br />
                    東京都千代田区有楽町1-2-2<br />
                    東宝日比谷ビル7階
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    営業許可
                  </div>
                  <div className="text-sm text-gray-900">
                    旅行業者代理業登録済み
                  </div>
                </div>
                <div className="flex border-b border-gray-200 pb-4">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    連絡先
                  </div>
                  <div className="text-sm text-gray-900">
                    Email: info@utahstudysupport.com<br />
                    Tel: 03-XXXX-XXXX
                  </div>
                </div>
                <div className="flex">
                  <div className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                    事業内容
                  </div>
                  <div className="text-sm text-gray-900">
                    ユタ州留学斡旋サービス「Utah Study Support」の運営<br />
                    語学学校・住居手配サービスの提供<br />
                    留学生向け現地サポートサービス
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
                    Utah Study Support開業<br />
                    ユタ州留学斡旋サービス「Utah Study Support」開始
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                    2017年
                  </div>
                  <div className="text-sm text-gray-900">
                    東京オフィス開設<br />
                    語学学校提携サービス開始
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                    2018年
                  </div>
                  <div className="text-sm text-gray-900">
                    住居手配サービス開始<br />
                    オンライン相談サービス開始
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                    2019年
                  </div>
                  <div className="text-sm text-gray-900">
                    現地サポートオフィス設立<br />
                    24時間緊急サポート開始
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                    2020年
                  </div>
                  <div className="text-sm text-gray-900">
                    ユタ現地オフィス拡張<br />
                    完全オンライン申込み対応開始
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 text-sm font-medium text-orange-500 flex-shrink-0">
                    2024年
                  </div>
                  <div className="text-sm text-gray-900">
                    留学者数累計5,000名突破<br />
                    デジタル申請システム導入
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
                ユタ州で夢を実現する日本人留学生を増やす
              </motion.p>
              <motion.p 
                className="text-gray-600 text-sm mt-4 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                ユタ州留学サポートを通じて、一人ひとりが新しい環境で自分らしく成長し、夢を実現できる機会を提供しています。
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
                ユタ州留学No.1のサポートサービスへ
              </motion.p>
              <motion.p 
                className="text-gray-600 text-sm mt-4 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              >
                きめ細やかなサポートと最高品質のサービスで、ユタ州留学支援の新しいスタンダードを創造し続けます。
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
              事務所（有楽町）
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
            ユタ州留学に関するご質問やご相談がございましたら、お気軽にお問い合わせください。
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
              無料留学相談に申し込む
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
  );
}