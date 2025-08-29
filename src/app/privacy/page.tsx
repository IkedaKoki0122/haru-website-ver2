"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <motion.main 
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="prose prose-lg max-w-none">
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            プライバシーポリシー
          </motion.h1>
          
          <motion.div 
            className="space-y-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. 基本方針</h2>
              <p className="text-gray-700 leading-relaxed">
                株式会社Utah Study Support（以下「当社」といいます。）は、当社の提供するサービスをご利用いただくお客様の個人情報の取り扱いについて、個人情報保護法その他の関連法令を遵守し、以下のプライバシーポリシーに従って適切に取り扱います。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. 個人情報の定義</h2>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定める個人情報、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）をいいます。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. 個人情報の収集目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">当社は、以下の目的で個人情報を収集いたします。</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>当社サービスの提供、運営、維持、改善のため</li>
                <li>お客様からのお問い合わせ、ご要望への対応のため</li>
                <li>カウンセリングサービスの提供のため</li>
                <li>学習進捗の管理およびサポートのため</li>
                <li>料金の請求および決済処理のため</li>
                <li>新サービス、キャンペーン等の情報提供のため</li>
                <li>利用規約違反の対応のため</li>
                <li>法令に基づく対応のため</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. 個人情報の収集方法</h2>
              <p className="text-gray-700 leading-relaxed mb-4">当社は、以下の方法により個人情報を収集いたします。</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>お客様がサービス申込み時に入力された情報</li>
                <li>お問い合わせフォームから送信された情報</li>
                <li>カウンセリング実施時に取得する情報</li>
                <li>Webサイトやアプリケーションの利用履歴</li>
                <li>決済処理に関する情報</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. 個人情報の安全管理</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。また、個人情報を取り扱う従業員や委託先に対して、必要かつ適切な監督を行います。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. 個人情報の開示・訂正・削除</h2>
              <p className="text-gray-700 leading-relaxed">
                お客様は、当社が保有するお客様の個人情報について、開示、訂正、利用停止、削除を求めることができます。これらの請求については、当社所定の方法により受け付けます。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Cookie（クッキー）について</h2>
              <p className="text-gray-700 leading-relaxed">
                当社のWebサイトでは、お客様の利便性向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、必要に応じて本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当社Webサイトに掲載した時点から効力を生じるものとします。
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. お問い合わせ</h2>
              <p className="text-gray-700 leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、以下の連絡先までご連絡ください。
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>株式会社Utah Study Support</strong><br />
                  〒100-0005 東京都千代田区丸の内1-1-1<br />
                  お問い合わせフォーム：<Link href="/contact" className="text-blue-600 hover:text-blue-800">こちら</Link><br />
                  受付時間：平日 9:00-18:00
                </p>
              </div>
            </motion.section>

            <motion.section 
              className="pt-8 border-t border-gray-200"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
            >
              <p className="text-gray-600 text-sm">
                制定日：2024年1月1日<br />
                最終更新日：2024年1月1日
              </p>
            </motion.section>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}