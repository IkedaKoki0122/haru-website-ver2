import Link from "next/link";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";

export default function CommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            特定商取引法に基づく表記
          </h1>
          <p className="text-gray-600">
            特定商取引に関する法律第11条に基づき、以下の通り表示いたします。
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              販売業者
            </h2>
            <p className="text-gray-700">
              株式会社Utah Study Support
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              代表責任者
            </h2>
            <p className="text-gray-700">
              代表取締役社長　岡田 祥吾
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              所在地
            </h2>
            <p className="text-gray-700">
              〒100-0006<br />
              東京都千代田区有楽町1-2-2<br />
              東宝日比谷ビル4階
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              電話番号
            </h2>
            <p className="text-gray-700">
              03-6206-9552<br />
              <span className="text-sm text-gray-600">
                ※お客様からのお問い合わせは、お問い合わせフォームにて承っております。
              </span>
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              メールアドレス
            </h2>
            <p className="text-gray-700">
              info@eikaiwa-kenkyujo.co.jp
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              サービス内容
            </h2>
            <p className="text-gray-700">
              英語コーチングサービス「Utah Study Support」の提供
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              料金
            </h2>
            <div className="text-gray-700">
              <p className="mb-2">各コース共通：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>2ヶ月プラン：380,600円（税込）</li>
                <li>3ヶ月プラン：544,500円（税込）</li>
                <li>6ヶ月プラン：1,069,200円（税込）</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                ※価格は全て税込み表示です。<br />
                ※別途入会金55,000円（税込）が必要です。
              </p>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              支払方法
            </h2>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>クレジットカード決済（一括払い・分割払い）</li>
                <li>銀行振込（一括払いのみ）</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                ※分割払いの場合、別途手数料が発生いたします。
              </p>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              支払時期
            </h2>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>クレジットカード決済：お申し込み時</li>
                <li>銀行振込：お申し込み後7日以内</li>
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              サービス提供時期
            </h2>
            <p className="text-gray-700">
              お申し込み完了後、担当コンサルタントよりご連絡いたします。<br />
              サービス開始日はお客様との面談の上、決定いたします。
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              キャンセル・返金について
            </h2>
            <div className="text-gray-700">
              <p className="mb-2">クーリング・オフについて：</p>
              <p className="mb-4">
                契約書面を受領した日から8日間以内であれば、書面により契約の解除を行うことができます。
              </p>
              <p className="mb-2">中途解約について：</p>
              <p>
                サービス開始後であっても、所定の手続きにより中途解約が可能です。<br />
                詳細は契約書面をご確認ください。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              その他
            </h2>
            <div className="text-gray-700">
              <p className="mb-2">
                本サービスは、お客様の英語学習をサポートするものであり、学習成果を保証するものではありません。
              </p>
              <p>
                詳細な利用規約については、
                <Link href="#" className="text-orange-500 hover:text-orange-600 underline">
                  利用規約
                </Link>
                をご確認ください。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-600"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}