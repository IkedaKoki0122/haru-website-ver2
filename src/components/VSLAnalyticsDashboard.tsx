'use client';

import { motion } from 'framer-motion';

interface VSLAnalytics {
  totalTime: number;
  watchTime: number;
  segments: Array<{
    start: number;
    end: number;
    watchCount: number;
  }>;
  dropOffPoints: Array<{
    time: number;
    dropRate: number;
  }>;
}

interface VSLAnalyticsDashboardProps {
  analytics: VSLAnalytics | null;
  videoTitle: string;
}

export default function VSLAnalyticsDashboard({ 
  analytics, 
  videoTitle 
}: VSLAnalyticsDashboardProps) {
  if (!analytics) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-2">分析データ</h3>
        <p className="text-gray-400">動画を再生すると分析データが表示されます</p>
      </div>
    );
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRetentionRate = () => {
    return analytics.totalTime > 0 ? (analytics.watchTime / analytics.totalTime) * 100 : 0;
  };

  const getDropOffRate = () => {
    return analytics.totalTime > 0 ? ((analytics.totalTime - analytics.watchTime) / analytics.totalTime) * 100 : 0;
  };

  const getEngagementScore = () => {
    const retentionRate = getRetentionRate();
    const dropOffCount = analytics.dropOffPoints.length;
    const engagementPenalty = dropOffCount * 5; // 離脱ポイント1つにつき5%減点
    return Math.max(0, retentionRate - engagementPenalty);
  };

  const getAverageWatchSegments = () => {
    if (analytics.segments.length === 0) return 0;
    const totalWatchCount = analytics.segments.reduce((sum, segment) => sum + segment.watchCount, 0);
    return totalWatchCount / analytics.segments.length;
  };

  const getMostEngagingSegment = () => {
    if (analytics.segments.length === 0) return null;
    return analytics.segments.reduce((max, segment) => 
      segment.watchCount > max.watchCount ? segment : max
    );
  };

  const getLeastEngagingSegment = () => {
    if (analytics.segments.length === 0) return null;
    const watchedSegments = analytics.segments.filter(segment => segment.watchCount > 0);
    if (watchedSegments.length === 0) return null;
    return watchedSegments.reduce((min, segment) => 
      segment.watchCount < min.watchCount ? segment : min
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6">{videoTitle} - 詳細分析</h2>
        
        {/* 主要指標 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium opacity-90">視聴維持率</h3>
            <div className="text-2xl font-bold">{getRetentionRate().toFixed(1)}%</div>
            <p className="text-sm opacity-75">
              {formatTime(analytics.watchTime)} / {formatTime(analytics.totalTime)}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium opacity-90">離脱率</h3>
            <div className="text-2xl font-bold">{getDropOffRate().toFixed(1)}%</div>
            <p className="text-sm opacity-75">
              {analytics.dropOffPoints.length} 箇所で離脱
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium opacity-90">エンゲージメント</h3>
            <div className="text-2xl font-bold">{getEngagementScore().toFixed(1)}%</div>
            <p className="text-sm opacity-75">
              離脱回数を考慮した総合評価
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium opacity-90">平均視聴</h3>
            <div className="text-2xl font-bold">{getAverageWatchSegments().toFixed(1)}</div>
            <p className="text-sm opacity-75">
              セグメント当たりの視聴回数
            </p>
          </div>
        </div>

        {/* 視聴パターン分析 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">視聴セグメント分析</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-end space-x-1 h-24 mb-4">
                {analytics.segments.map((segment, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t transition-all duration-300 hover:opacity-80"
                    style={{
                      height: `${Math.max((segment.watchCount / Math.max(...analytics.segments.map(s => s.watchCount))) * 100, 5)}%`,
                      backgroundColor: segment.watchCount > 0 
                        ? `hsl(${240 + (segment.watchCount * 30)}, 70%, 60%)` 
                        : '#374151'
                    }}
                    title={`${formatTime(segment.start)}-${formatTime(segment.end)}: ${segment.watchCount}回視聴`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>0:00</span>
                <span>{formatTime(analytics.totalTime)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">セグメント詳細</h3>
            <div className="space-y-3">
              {getMostEngagingSegment() && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <h4 className="text-green-400 font-medium">最も魅力的なセグメント</h4>
                  <p className="text-white text-sm">
                    {formatTime(getMostEngagingSegment()!.start)} - {formatTime(getMostEngagingSegment()!.end)}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {getMostEngagingSegment()!.watchCount}回視聴
                  </p>
                </div>
              )}
              
              {getLeastEngagingSegment() && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                  <h4 className="text-red-400 font-medium">改善が必要なセグメント</h4>
                  <p className="text-white text-sm">
                    {formatTime(getLeastEngagingSegment()!.start)} - {formatTime(getLeastEngagingSegment()!.end)}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {getLeastEngagingSegment()!.watchCount}回視聴
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 離脱ポイント分析 */}
        {analytics.dropOffPoints.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-4">離脱ポイント分析</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="space-y-2">
                {analytics.dropOffPoints.slice(0, 5).map((point, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">
                      {formatTime(point.time)}
                    </span>
                    <span className="text-red-400">
                      {point.dropRate.toFixed(1)}% 地点で離脱
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 改善提案 */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h3 className="text-blue-400 font-medium mb-2">改善提案</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            {getRetentionRate() < 50 && (
              <li>• 視聴維持率が低いです。動画の冒頭でより強いフックを検討してください</li>
            )}
            {analytics.dropOffPoints.length > 3 && (
              <li>• 離脱ポイントが多いです。内容の構成を見直すことをお勧めします</li>
            )}
            {getEngagementScore() < 40 && (
              <li>• エンゲージメントが低いです。より魅力的なストーリーテリングを検討してください</li>
            )}
            {analytics.watchTime < 60 && (
              <li>• 視聴時間が短いです。より価値のあるコンテンツの追加を検討してください</li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}