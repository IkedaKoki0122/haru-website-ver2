'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Video {
  url: string;
  downloadUrl: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

interface VideoManagerProps {
  onVideoSelect?: (videoUrl: string) => void;
}

export default function VideoManager({ onVideoSelect }: VideoManagerProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingVideo, setDeletingVideo] = useState<string | null>(null);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/videos');
      
      if (!response.ok) {
        throw new Error('動画一覧の取得に失敗しました');
      }
      
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error('動画一覧の取得エラー:', error);
      setError(error instanceof Error ? error.message : '動画一覧の取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteVideo = async (videoUrl: string) => {
    if (!confirm('この動画を削除しますか？')) return;

    try {
      setDeletingVideo(videoUrl);
      const response = await fetch(`/api/videos?url=${encodeURIComponent(videoUrl)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('動画の削除に失敗しました');
      }

      setVideos(videos.filter(video => video.url !== videoUrl));
    } catch (error) {
      console.error('動画削除エラー:', error);
      setError(error instanceof Error ? error.message : '動画の削除に失敗しました');
    } finally {
      setDeletingVideo(null);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-700 rounded w-1/3"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">動画管理</h3>
        <button
          onClick={loadVideos}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          更新
        </button>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 bg-red-500/20 border border-red-500/30 rounded-lg p-3"
        >
          <p className="text-red-400 text-sm">❌ {error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-xs text-red-300 hover:text-red-200"
          >
            閉じる
          </button>
        </motion.div>
      )}

      {videos.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl text-gray-400 mb-4">📹</div>
          <p className="text-gray-400">アップロードされた動画がありません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.url}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700/50 rounded-lg p-4 border border-gray-600"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">
                    {video.pathname.split('/').pop() || 'Unknown'}
                  </h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                    <span>{formatFileSize(video.size)}</span>
                    <span>{formatDate(video.uploadedAt)}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {video.url}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {onVideoSelect && (
                    <button
                      onClick={() => onVideoSelect(video.url)}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                    >
                      選択
                    </button>
                  )}
                  
                  <a
                    href={video.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    プレビュー
                  </a>
                  
                  <button
                    onClick={() => deleteVideo(video.url)}
                    disabled={deletingVideo === video.url}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deletingVideo === video.url ? '削除中...' : '削除'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}