import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from "next/link";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  content?: string;
}

// 記事データ（実際のプロジェクトではAPIから取得）
const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2024.08.20",
    title: "TOEIC900でも、英語会議では沈黙してしまうあなたへ",
    excerpt:
      "外資系企業で成果を出したい。でも『英語で即答できない自分』が、キャリアのブレーキになっていませんか？",
    category: "Day1 LP",
    image: "/lp1-toeic900-silence.jpg",
  },
  {
    id: 2,
    date: "2024.08.10",
    title: "新講師陣紹介：グローバル企業出身のプロフェッショナル",
    excerpt:
      "世界的な企業での豊富な経験を持つ新しい講師陣が加わりました。実践的なビジネス英語をお教えします。",
    category: "講師紹介",
    image: "/news-02.jpg",
  },
  {
    id: 3,
    date: "2024.08.05",
    title: "670→905、B2達成。半導体エンジニアが12週間で変わった軌跡。",
    excerpt:
      "半導体エンジニアが12週間の集中コーチングでTOEIC 670→905、VERSANT B2を達成。会議での即応力向上の実証データを公開。",
    category: "実績",
    image: "/news-03.jpg",
  },
  // 他の記事データは省略
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const article = newsItems.find((item) => item.id === id);
  
  if (!article) {
    return {
      title: '記事が見つかりません | Utah Study Support',
      description: 'お探しの記事が見つかりませんでした。',
    };
  }

  return {
    title: `${article.title} | Utah Study Support`,
    description: article.excerpt,
    keywords: ['Utah Study Support', 'ユタ州留学', article.category, '留学ニュース', '英語学習'],
    openGraph: {
      title: `${article.title} | Utah Study Support`,
      description: article.excerpt,
      type: 'article',
      url: `https://utah-study-support.com/topics/${id}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date.replace(/\./g, '-'),
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Utah Study Support`,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `/topics/${id}`,
    },
  };
}

export default async function TopicDetail({ params }: Props) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  // 全記事データ（実際のプロジェクトではAPIから取得）
  const allNewsItems: NewsItem[] = [
    {
      id: 1,
      date: "2024.08.20",
      title: "TOEIC900でも、英語会議では沈黙してしまうあなたへ",
      excerpt:
        "外資系企業で成果を出したい。でも『英語で即答できない自分』が、キャリアのブレーキになっていませんか？",
      category: "Day1 LP",
      image: "/lp1-toeic900-silence.jpg",
      content: `
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 50px 20px; margin: -20px -20px 40px -20px; border-radius: 12px; text-align: center;">
          <h1 style="font-size: 36px; font-weight: bold; margin-bottom: 20px; line-height: 1.2;">TOEIC900でも、<br>英語会議では沈黙してしまうあなたへ</h1>
          <p style="font-size: 20px; margin-bottom: 30px; opacity: 0.9;">外資系企業で成果を出したい。<br>でも「英語で即答できない自分」が、キャリアのブレーキになっていませんか？</p>
          <button style="background: #f59e0b; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">▶ 無料動画を今すぐ受け取る</button>
        </div>
        
        <h2 style="color: #1e40af; margin-bottom: 30px;">もし、あなたがこんな悩みを持っているなら…</h2>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 30px 0;">
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="padding: 15px 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center;">
              <span style="color: #ef4444; font-size: 20px; margin-right: 15px;">✗</span>
              <span style="font-size: 18px; color: #374151;">「資料は読めるけど、ディスカッションで言葉が出ない」</span>
            </li>
            <li style="padding: 15px 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center;">
              <span style="color: #ef4444; font-size: 20px; margin-right: 15px;">✗</span>
              <span style="font-size: 18px; color: #374151;">「英語が聞き取れず、会議で置いていかれる」</span>
            </li>
            <li style="padding: 15px 0; display: flex; align-items: center;">
              <span style="color: #ef4444; font-size: 20px; margin-right: 15px;">✗</span>
              <span style="font-size: 18px; color: #374151;">「一人で学習しても伸び悩む」</span>
            </li>
          </ul>
        </div>
        
        <div style="background: #dcfce7; border: 2px solid #22c55e; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
          <p style="color: #166534; font-size: 18px; font-weight: bold; margin: 0;">それは決して「努力不足」ではありません。</p>
        </div>
        
        <h2 style="color: #1e40af; margin: 40px 0 30px 0;">なぜ多くの日本人が「読める」のに「話せない」のか？</h2>
        
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 25px; margin: 30px 0;">
          <p style="color: #92400e; font-size: 18px; margin-bottom: 20px;">日本人の多くは、</p>
          <ul style="color: #92400e; margin: 0;">
            <li style="margin-bottom: 10px;"><strong>文法・読解偏重の学習</strong></li>
            <li style="margin-bottom: 10px;"><strong>会話即応力を鍛えない練習</strong></li>
          </ul>
          <p style="color: #92400e; font-size: 16px; margin-top: 20px;">によって、「読む・書く」と「話す・聞く」の力に大きなギャップがあります。</p>
        </div>
        
        <div style="background: #fee2e2; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
          <p style="color: #dc2626; font-size: 18px; font-weight: bold; margin: 0;">その結果、TOEIC900を超えても、<br>実際の英語会議では思うように力を発揮できないのです。</p>
        </div>
        
        <h2 style="color: #1e40af; margin: 50px 0 30px 0;">実は、私自身もそうでした。</h2>
        
        <div style="background: #f3f4f6; padding: 30px; border-radius: 8px; margin: 30px 0; font-style: italic;">
          <p style="color: #374151; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">理系出身で外資系に転職したとき、<br>「英語ができる人材」と期待されながらも、<br>実際の会議では<strong style="color: #dc2626;">何も言えず沈黙</strong>。</p>
          
          <p style="color: #374151; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">あのときの「居場所がない感覚」「恥ずかしさ」は今でも忘れられません。</p>
          
          <p style="color: #374151; font-size: 18px; line-height: 1.6; margin: 0;">でも、ある学習法に出会い、<br><strong style="color: #059669;">「科学的に原因を特定 → 適切なトレーニング」</strong>を実行することで、<br>数か月後には国際会議で自信をもって発言できるようになったのです。</p>
        </div>
        
        <h2 style="color: #1e40af; margin: 50px 0 30px 0;">ここまで読んで「自分も同じだ」と感じた方へ。</h2>
        
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 30px; border-radius: 8px; margin: 30px 0;">
          <p style="color: #374151; font-size: 18px; margin-bottom: 20px; text-align: center;">実は、あなたの「会議で沈黙する原因」は明確に診断できます。</p>
          
          <p style="color: #374151; font-size: 18px; margin-bottom: 30px; text-align: center;">Day2の動画では、<br><strong style="color: #1e40af;">なぜ多くの人が"努力しても話せない"のか？</strong><br>その具体的な理由を解説します。</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 40px; border-radius: 12px; margin: 40px 0; text-align: center;">
          <h3 style="font-size: 24px; margin-bottom: 20px;">今すぐ行動を起こしましょう</h3>
          <p style="font-size: 16px; margin-bottom: 30px; opacity: 0.9;">（※登録いただくと、7日間の特別プログラムを順番にお届けします）</p>
          <button style="background: white; color: #d97706; padding: 18px 40px; border: none; border-radius: 8px; font-size: 20px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">▶ 無料動画を受け取る</button>
        </div>
        
        <div style="text-align: center; margin-top: 40px; color: #6b7280;">
          <p style="font-size: 14px;">※この機会を逃すと、また同じ悩みを抱え続けることになります。<br>今こそ変化のタイミングです。</p>
        </div>
      `,
    },
    {
      id: 2,
      date: "2024.08.10",
      title: "新講師陣紹介：グローバル企業出身のプロフェッショナル",
      excerpt:
        "世界的な企業での豊富な経験を持つ新しい講師陣が加わりました。実践的なビジネス英語をお教えします。",
      category: "講師紹介",
      image: "/news-02.jpg",
      content: `
        <p>Utah Study Supportに新しい講師陣が加わりました。全員がグローバル企業での豊富な経験を持つプロフェッショナルです。</p>
        
        <h2>新講師陣のプロフィール</h2>
        
        <h3>Sarah Johnson（サラ・ジョンソン）</h3>
        <p>・元Google シニアマネージャー<br>
        ・15年のビジネス経験<br>
        ・TOEIC満点保持者<br>
        ・専門分野：テクノロジー、マーケティング</p>
        
        <h3>Michael Chen（マイケル・チェン）</h3>
        <p>・元McKinsey コンサルタント<br>
        ・ハーバードビジネススクール卒業<br>
        ・10年のコンサルティング経験<br>
        ・専門分野：戦略、ファイナンス</p>
        
        <h3>Emma Rodriguez（エマ・ロドリゲス）</h3>
        <p>・元Amazon プロダクトマネージャー<br>
        ・スタンフォード大学卒業<br>
        ・12年のプロダクト開発経験<br>
        ・専門分野：プロダクトマネジメント、UX</p>
        
        <h2>講師陣の特徴</h2>
        <ul>
          <li>実践的なビジネス経験に基づく指導</li>
          <li>業界別の専門知識を活かしたレッスン</li>
          <li>グローバルな視点での英語教育</li>
          <li>受講生のキャリア目標に合わせたカスタマイズ</li>
        </ul>
        
        <p>これらの講師陣と一緒に、実践的で効果的な英語学習を始めませんか？</p>
      `,
    },
    {
      id: 3,
      date: "2024.08.05",
      title: "670→905、B2達成。半導体エンジニアが12週間で変わった軌跡。",
      excerpt:
        "半導体エンジニアが12週間の集中コーチングでTOEIC 670→905、VERSANT B2を達成。会議での即応力向上の実証データを公開。",
      category: "実績",
      image: "/news-03.jpg",
      content: `
        <h2>ビッグアイデア：会議での「即応力」を科学的に分解</h2>
        <p>会議での「即応力」を科学的に分解し、診断→処方→伴走→可視化で12週間で業務英語を武器化。</p>
        
        <h2>メカニズム（仕組み）</h2>
        <p>音声知覚 × 音韻運動 × 会議スクリプト × 反射訓練（ドリル） × 週次1on1 × ダッシュボード。</p>
        
        <h2>実証ケース：半導体エンジニア様の成果</h2>
        
        <h3>基本データ</h3>
        <ul>
          <li>職種：半導体設計エンジニア</li>
          <li>受講期間：12週間</li>
          <li>学習時間：週3h×平日＋週末合計 ~30h/w</li>
          <li>TOEIC：670点→905点（235点向上）</li>
          <li>VERSANT：レベルB2達成</li>
        </ul>
        
        <h3>週次計画実行ログの抜粋</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <strong>Week 3:</strong><br>
          平日：月(3.2h) 火(2.8h) 水(3.1h) 木(2.9h) 金(3.0h)<br>
          週末：土(5h集中) 日(4h集中)<br>
          累積：24.0h/週
        </div>
        
        <h3>会議での「間（沈黙）」削減データ</h3>
        <ul>
          <li>開始時：平均応答時間 4.2秒</li>
          <li>6週目：平均応答時間 2.8秒</li>
          <li>12週目：平均応答時間 1.5秒</li>
        </ul>
        
        <h3>学会ポスター発表の変化</h3>
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <strong>Before:</strong> 日本語原稿→翻訳→暗記（準備時間：2週間）<br>
          <strong>After:</strong> 英語で直接構想→発話（準備時間：3日）
        </div>
        
        <h2>反論処理（FAQ）</h2>
        
        <h3>Q: 3ヶ月で本当に変わる？</h3>
        <p><strong>A:</strong> 学習時間週30時間を条件として、TOEIC150点以上向上を保証。音声データとダッシュボードで進捗を可視化します。</p>
        
        <h3>Q: 続けられるか不安</h3>
        <p><strong>A:</strong> 週次1on1面談と日次締切設計により継続率92%を実現。専任コーチが伴走します。</p>
        
        <h3>Q: 汎用レッスンとの違い</h3>
        <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <strong>一般英会話:</strong> 日常会話中心<br>
          <strong>当プログラム:</strong> 半導体業務特化スクリプト + 会議即応訓練
        </div>
        
        <h2>12週間集中コーチング内容</h2>
        <ul>
          <li>個別診断・処方</li>
          <li>週次面談・日次伴走</li>
          <li>音声AIフィードバック</li>
          <li>定員少数制</li>
        </ul>
        
        <h2>価格</h2>
        <p>一括 660,000円（税込）／分割 月々 69,300円×10回</p>
        
        <h2>特典ボーナス</h2>
        <ul>
          <li>①会議即応スクリプト集（半導体業務特化）</li>
          <li>②個別シャドーイング処方箋3ヶ月分</li>
          <li>③VERSANT対策リビルド講座</li>
          <li>④上司共有用「進捗レポート」テンプレ</li>
          <li>⑤学会発表同時通訳リハ30分×2</li>
          <li>⑥受講中アプリ利用権（記録・可視化）</li>
        </ul>
        
        <h2>保証</h2>
        <p>14日満足保証（実施基準：提出課題と出席が一定条件を満たす場合、全額返金）</p>
      `,
    },
    {
      id: 4,
      date: "2024.07.30",
      title: "オンライン受講システムのアップデート完了",
      excerpt:
        "より使いやすく、より効果的な学習環境を提供するため、オンラインシステムを大幅にアップデートしました。",
      category: "システム",
      image: "/news-04.jpg",
      content: `
        <p>Utah Study Supportのオンライン受講システムを大幅にアップデートし、より使いやすく効果的な学習環境を提供いたします。</p>
        
        <h2>新機能の紹介</h2>
        
        <h3>1. AI学習アシスタント</h3>
        <p>・個人の学習進捗に合わせた最適な学習プランの提案<br>
        ・弱点分野の自動分析と強化プログラムの提供<br>
        ・24時間いつでも質問可能なAIチューター</p>
        
        <h3>2. リアルタイム進捗管理</h3>
        <p>・学習時間、正答率、理解度をリアルタイムで可視化<br>
        ・週次・月次の学習レポートの自動生成<br>
        ・目標達成までの道のりを明確に表示</p>
        
        <h3>3. インタラクティブな学習コンテンツ</h3>
        <p>・動画、音声、クイズを組み合わせた多様な学習コンテンツ<br>
        ・VR技術を活用した疑似体験型レッスン<br>
        ・ゲーミフィケーション要素による学習意欲の向上</p>
        
        <h3>4. コミュニティ機能</h3>
        <p>・受講生同士の学習グループの作成<br>
        ・学習仲間との情報交換や励まし合い<br>
        ・講師への質問や相談の共有</p>
        
        <h2>システム要件</h2>
        <ul>
          <li>対応ブラウザ：Chrome、Safari、Firefox、Edge（最新版）</li>
          <li>推奨インターネット環境：光回線以上</li>
          <li>推奨デバイス：PC、タブレット、スマートフォン</li>
        </ul>
        
        <h2>アップデート日時</h2>
        <p>2024年8月1日（木）午前6:00〜午前8:00<br>
        この時間帯はシステムメンテナンスのため、サービスが一時停止いたします。</p>
        
        <p>新しいシステムで、より効果的な英語学習を体験してください。</p>
      `,
    },
    {
      id: 5,
      date: "2024.07.25",
      title: "受講生インタビュー：外資系転職成功事例",
      excerpt:
        "Utah Study Supportで英語力を身につけ、念願の外資系企業への転職を成功させた受講生のインタビューをお届けします。",
      category: "受講生の声",
      image: "/news-05.jpg",
      content: `
        <p>Utah Study Supportで英語力を身につけ、念願の外資系企業への転職を成功させた受講生のインタビューをお届けします。</p>
        
        <h2>インタビュー対象者</h2>
        <p><strong>山田太郎さん（仮名）</strong><br>
        年齢：28歳<br>
        前職：国内IT企業のエンジニア<br>
        転職先：米国系IT企業の日本法人<br>
        学習期間：6ヶ月</p>
        
        <h2>転職のきっかけ</h2>
        <p>「海外の最新技術に触れたい、グローバルな環境で働きたいという思いが強くなりました。でも、英語力に自信がなくて、なかなか行動に移せませんでした。」</p>
        
        <h2>Utah Study Supportを選んだ理由</h2>
        <p>「科学的なアプローチと、実践的なビジネス英語に特化している点が魅力的でした。また、短期間で成果を出せるという点も決め手になりました。」</p>
        
        <h2>学習の成果</h2>
        <ul>
          <li>TOEICスコア：450点 → 780点（330点向上）</li>
          <li>英語面接での自信の向上</li>
          <li>技術文書の英語での理解力向上</li>
          <li>海外チームとのコミュニケーション能力向上</li>
        </ul>
        
        <h2>転職活動での活用</h2>
        <p>「Utah Study Supportで学んだビジネス英語が、面接や書類作成で大いに役立ちました。特に、技術的な内容を英語で説明する練習ができたのが良かったです。」</p>
        
        <h2>現在の仕事</h2>
        <p>「現在は、米国の本社チームと協力してプロジェクトを進めています。英語での会議やメールのやり取りも、以前は想像できませんでしたが、今では自然にこなせています。」</p>
        
        <h2>今後の目標</h2>
        <p>「さらに英語力を向上させて、海外拠点での勤務も視野に入れています。Utah Study Supportで身につけた学習習慣を活かして、継続的に成長していきたいです。」</p>
        
        <h2>後輩へのメッセージ</h2>
        <blockquote>
          "英語力は一朝一夕には身につきませんが、正しい方法で継続すれば必ず成果が出ます。Utah Study Supportの科学的なアプローチを信じて、諦めずに学習を続けてください。"
        </blockquote>
        
        <p>山田さんのような成功事例は、Utah Study Supportの受講生の中にたくさんあります。あなたも次の成功事例になりませんか？</p>
      `,
    },
    {
      id: 6,
      date: "2024.07.20",
      title: "新校舎開校予定：大阪梅田校",
      excerpt:
        "関西エリアでのサービス拡充の一環として、大阪梅田に新しい校舎を開校予定です。",
      category: "お知らせ",
      image: "/news-06.jpg",
      content: `
        <p>関西エリアでのサービス拡充の一環として、大阪梅田に新しい校舎を開校予定です。</p>
        
        <h2>大阪梅田校の概要</h2>
        <ul>
          <li>開校予定日：2024年10月1日（火）</li>
          <li>所在地：大阪府大阪市北区梅田1-1-1</li>
          <li>アクセス：JR大阪駅徒歩3分、地下鉄梅田駅徒歩2分</li>
          <li>教室数：8教室</li>
          <li>定員：最大200名</li>
        </ul>
        
        <h2>大阪梅田校の特徴</h2>
        
        <h3>1. 立地の利便性</h3>
        <p>・大阪の中心地、梅田に立地<br>
        ・主要駅からのアクセスが良好<br>
        ・ビジネス街に近く、仕事帰りに通いやすい</p>
        
        <h3>2. 最新の学習環境</h3>
        <p>・最新の音響設備を完備<br>
        ・個別ブースでの集中学習スペース<br>
        ・グループレッスン用の広い教室</p>
        
        <h3>3. 関西エリア特化のサービス</h3>
        <p>・関西のビジネス文化に合わせたカリキュラム<br>
        ・地元企業との連携プログラム<br>
        ・関西弁を交えた親しみやすいレッスン</p>
        
        <h2>開校記念キャンペーン</h2>
        <ul>
          <li>入会金無料（通常¥50,000）</li>
          <li>初月授業料50%OFF</li>
          <li>無料体験レッスン実施</li>
          <li>先着100名様限定特典</li>
        </ul>
        
        <h2>事前予約受付開始</h2>
        <p>8月1日（木）より事前予約の受付を開始いたします。<br>
        予約特典として、開校前の無料体験レッスンにご参加いただけます。</p>
        
        <h2>お問い合わせ</h2>
        <p>大阪梅田校に関するお問い合わせは、以下の連絡先までお気軽にお電話ください。<br>
        電話：06-1234-5678（平日9:00-18:00）</p>
        
        <p>関西エリアの皆様、ぜひ大阪梅田校で英語学習を始めませんか？</p>
      `,
    },
    {
      id: 7,
      date: "2024.07.15",
      title: "英語学習効果を最大化する新メソッド発表",
      excerpt:
        "最新の脳科学研究に基づく新しい学習メソッドを開発しました。学習効率が従来比20%向上します。",
      category: "メソッド",
      image: "/news-07.jpg",
      content: `
        <p>Utah Study Supportは、最新の脳科学研究に基づく新しい学習メソッド「Utah Study Support Advanced Learning System（PALS）」を開発し、発表いたします。</p>
        
        <h2>PALSの特徴</h2>
        
        <h3>1. 脳科学に基づく学習最適化</h3>
        <p>・個人の脳の特性に合わせた学習スケジュールの最適化<br>
        ・記憶の定着に最適なタイミングでの復習<br>
        ・集中力の波に合わせた学習内容の調整</p>
        
        <h3>2. AI技術を活用したパーソナライゼーション</h3>
        <p>・学習者の行動パターンを分析した個別カリキュラム<br>
        ・弱点分野の自動検出と強化プログラム<br>
        ・学習進捗に応じた動的な内容調整</p>
        
        <h3>3. マルチモーダル学習</h3>
        <p>・視覚、聴覚、触覚を組み合わせた学習体験<br>
        ・VR/AR技術を活用した没入型学習<br>
        ・ゲーミフィケーションによる学習意欲の向上</p>
        
        <h2>従来比20%の学習効率向上</h2>
        <p>PALSを導入した結果、以下のような成果が確認されています：</p>
        <ul>
          <li>学習時間の短縮：従来比20%</li>
          <li>記憶定着率の向上：従来比25%</li>
          <li>学習継続率の向上：従来比30%</li>
          <li>満足度の向上：従来比40%</li>
        </ul>
        
        <h2>導入スケジュール</h2>
        <ul>
          <li>2024年8月：一部コースで試験導入</li>
          <li>2024年9月：全コースへの段階的導入</li>
          <li>2024年10月：全受講生への完全導入</li>
        </ul>
        
        <h2>研究協力</h2>
        <p>PALSの開発には、以下の研究機関が協力しています：</p>
        <ul>
          <li>東京大学 脳科学研究センター</li>
          <li>京都大学 認知科学研究所</li>
          <li>大阪大学 言語学研究科</li>
        </ul>
        
        <h2>今後の展望</h2>
        <p>PALSは継続的に改良を重ね、さらなる学習効率の向上を目指します。また、他の言語学習にも応用可能な汎用的なシステムとして、教育業界全体への貢献も検討しています。</p>
        
        <p>この革新的なメソッドで、あなたの英語学習を次のレベルに引き上げませんか？</p>
      `,
    },
    {
      id: 8,
      date: "2024.07.10",
      title: "企業研修プログラム導入企業100社突破",
      excerpt:
        "多くの企業様にご利用いただいている企業研修プログラムの導入企業数が100社を突破しました。",
      category: "実績",
      image: "/news-08.jpg",
      content: `
        <p>Utah Study Supportの企業研修プログラムの導入企業数が100社を突破し、多くの企業様にご利用いただいております。</p>
        
        <h2>導入企業の内訳</h2>
        <ul>
          <li>IT・テクノロジー企業：35社</li>
          <li>製造業：25社</li>
          <li>金融・保険業：20社</li>
          <li>商社・貿易：10社</li>
          <li>その他：10社</li>
        </ul>
        
        <h2>企業研修プログラムの特徴</h2>
        
        <h3>1. 業界特化型カリキュラム</h3>
        <p>・各業界の専門用語や表現に特化<br>
        ・実際の業務シーンを想定したロールプレイ<br>
        ・業界の最新トレンドを反映した内容</p>
        
        <h3>2. 柔軟なスケジュール</h3>
        <p>・企業の業務スケジュールに合わせた調整<br>
        ・オンライン・オフラインのハイブリッド対応<br>
        ・短期集中から長期継続まで対応</p>
        
        <h3>3. 効果測定システム</h3>
        <p>・定期的なスキルアセスメント<br>
        ・学習進捗の可視化<br>
        ・ROIの明確な測定</p>
        
        <h2>導入企業の声</h2>
        
        <blockquote>
          "社員の英語力が向上し、海外との取引がスムーズになりました。特に、ビジネス英語に特化した内容が実用的で良かったです。"<br>
          - A社 人事部長
        </blockquote>
        
        <blockquote>
          "オンラインでの研修が可能で、業務に支障をきたすことなく英語学習を進められました。社員の満足度も高く、継続率も良好です。"<br>
          - B社 総務部長
        </blockquote>
        
        <h2>プログラムの種類</h2>
        <ul>
          <li>ビジネス英会話研修</li>
          <li>TOEIC対策研修</li>
          <li>プレゼンテーション英語研修</li>
          <li>交渉英語研修</li>
          <li>メール・文書作成研修</li>
        </ul>
        
        <h2>導入実績</h2>
        <ul>
          <li>受講者数：累計5,000名以上</li>
          <li>平均スコア向上：TOEIC 150点</li>
          <li>満足度：95%</li>
          <li>継続率：90%</li>
        </ul>
        
        <h2>今後の展開</h2>
        <p>100社突破を記念して、新たな企業研修プログラムの開発を進めています。AI技術を活用した個別最適化や、VR技術を活用した疑似体験型研修など、革新的なプログラムを準備中です。</p>
        
        <p>企業のグローバル化を支援するUtah Study Supportの企業研修プログラムを、ぜひご検討ください。</p>
      `,
    },
  ];

  const article = allNewsItems.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/topics" />
      <Breadcrumb />

      <main>
        {/* Article Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/topics"
                className="text-blue-200 hover:text-white text-sm"
              >
                ← トピックス一覧に戻る
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-blue-200">{article.date}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-blue-100">{article.excerpt}</p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <article className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </article>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                この記事をシェア
              </h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 text-sm">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                  LINE
                </button>
              </div>
            </div>

            {/* Back to Topics */}
            <div className="mt-8">
              <Link
                href="/topics"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
              >
                ← トピックス一覧に戻る
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative">
          <div className="w-full h-[250px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  無料カウンセリング実施中
                </h2>
                <p className="text-lg mb-8">
                  あなたの英語学習の課題を分析し、最適な学習プランをご提案いたします。
                </p>
                <button className="bg-white text-orange-500 px-10 py-3 rounded-full hover:bg-gray-100 text-lg font-bold">
                  先行相談（無料30分）を予約する
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

