"use client";
import Image from "next/image";
import { useMemo, memo } from "react";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";

function CoursesClient() {
  const { loading, handleEnrollment } = useStripeCheckout();

  const courses = useMemo(() => [
    {
      id: 'business',
      title: 'ビジネス英会話コース',
      description: 'ビジネスシーンで必要な英会話力を習得',
      duration: '3ヶ月',
      price: '¥544,500',
      features: [
        '週1回の専属コンサルタントとの面談',
        'ビジネス英語に特化したカリキュラム',
        '24時間質問サポート',
        '卒業後1年間の継続サポート'
      ],
      icon: '/icon-business.svg',
      suitable: [
        '海外出張や会議で英語を使う必要がある方',
        'プレゼンテーションスキルを向上させたい方',
        'ビジネスメールの作成能力を身につけたい方'
      ]
    },
    {
      id: 'toeic',
      title: 'TOEIC L&R TESTコース',
      description: 'スコアアップに特化した学習プログラム',
      duration: '3ヶ月',
      price: '¥544,500',
      features: [
        'TOEIC専門コンサルタントによる指導',
        '弱点分析と個別カリキュラム',
        '模試と詳細なフィードバック',
        'スコア保証制度'
      ],
      icon: '/icon-toeic.svg',
      suitable: [
        '就職・転職でTOEICスコアが必要な方',
        '現在のスコアから200点以上アップを目指す方',
        '短期間で効率的にスコアアップしたい方'
      ]
    },
    {
      id: 'toefl',
      title: 'TOEFL iBT TESTコース',
      description: '海外大学進学を目指す方向け',
      duration: '3ヶ月',
      price: '¥544,500',
      features: [
        'TOEFL専門講師による4技能指導',
        'アカデミック英語に特化',
        '模試と個別フィードバック',
        '海外大学受験サポート'
      ],
      icon: '/icon-toefl.svg',
      suitable: [
        '海外大学・大学院進学を目指す方',
        'アカデミック英語力を身につけたい方',
        'TOEFL iBT 80点以上を目指す方'
      ]
    },
    {
      id: 'beginner',
      title: '初級者コース',
      description: '英語学習が初めての方向け',
      duration: '3ヶ月',
      price: '¥544,500',
      features: [
        '基礎から丁寧な指導',
        '日本人コンサルタントによるサポート',
        '学習習慣の確立',
        '段階的なレベルアップ'
      ],
      icon: '/icon-beginner.svg',
      suitable: [
        '英語学習を一から始めたい方',
        '中学英語から復習したい方',
        '英語に対する苦手意識を克服したい方'
      ]
    }
  ], []);

  return (
    <div>
      {/* Courses Grid */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg hover:border-orange-300 transition-all cursor-pointer group"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 mr-4 flex-shrink-0">
                    <Image
                      src={course.icon}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl font-bold text-orange-500">
                        {course.price}
                      </div>
                      <div className="text-gray-500">
                        / {course.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    コース内容
                  </h3>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-700"
                      >
                        <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    こんな方におすすめ
                  </h3>
                  <ul className="space-y-1">
                    {course.suitable.map((item, suitableIndex) => (
                      <li 
                        key={suitableIndex} 
                        className="text-gray-600 text-sm"
                      >
                        <span className="text-orange-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleEnrollment(course.id)}
                  disabled={loading}
                  className={`w-full bg-orange-500 text-white py-3 rounded-lg font-medium text-lg transition-colors
                    ${loading 
                      ? 'bg-orange-300 cursor-not-allowed' 
                      : 'hover:bg-orange-600'
                    }
                  `}
                >
                  {loading ? '処理中...' : 'このコースを受講する'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default memo(CoursesClient);