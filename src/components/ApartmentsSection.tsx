export default function ApartmentsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            学生アパート情報
          </h2>
          <p className="text-lg text-gray-600">
            プロボエリアの学生向けアパート「Alta Apartments」のご紹介
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <img 
              src="/Alta.jpg" 
              alt="Alta Apartments" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alta Apartments
            </h3>
            <p className="text-gray-600 mb-4">
              1850 N University Ave, Provo, UT 84604
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">家賃料金</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• レギュラー: <span className="font-semibold">$415/月</span></li>
                <li>• アップグレード: <span className="font-semibold">$440/月</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">追加費用</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• ユーティリティ定額: <span className="font-semibold">$60/月</span></li>
                <li>• 駐車場: <span className="font-semibold">$240/年</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3 text-gray-900">初期費用</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 申込料: <span className="font-semibold">$50</span></li>
              <li>• 保証金: <span className="font-semibold">家賃相当額</span>（$115は不返金）</li>
              <li>• 入居前支払い: <span className="font-semibold">初月+最終月家賃</span></li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>注意:</strong> 学生物件は学期・空室状況で価格が変動します。
              申込前に現在の空室状況・実勢家賃・支払スケジュールを各オフィスで再確認してください。
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://altaapartments.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              公式サイトで詳細を確認
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}