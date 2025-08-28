'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VideoUpload from '@/components/VideoUpload';
import VideoManager from '@/components/VideoManager';
import VSLSection from '@/components/VSLSection';

export default function AdminVideosPage() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'manage' | 'preview'>('upload');

  const handleVideoSelect = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setActiveTab('preview');
  };

  const handleUploadComplete = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setActiveTab('preview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            動画管理システム
          </h1>

          {/* タブナビゲーション */}
          <div className="mb-8">
            <nav className="flex space-x-8 justify-center">
              {[
                { key: 'upload', label: 'アップロード', icon: '⬆️' },
                { key: 'manage', label: '管理', icon: '📁' },
                { key: 'preview', label: 'プレビュー', icon: '👁️' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* タブコンテンツ */}
          <div className="space-y-8">
            {activeTab === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VideoUpload onUploadComplete={handleUploadComplete} maxSize={500} />
              </motion.div>
            )}

            {activeTab === 'manage' && (
              <motion.div
                key="manage"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VideoManager onVideoSelect={handleVideoSelect} />
              </motion.div>
            )}

            {activeTab === 'preview' && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {selectedVideoUrl ? (
                  <>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        選択中の動画URL
                      </h3>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 break-all">
                        {selectedVideoUrl}
                      </div>
                      <p className="text-gray-400 text-sm mt-2">
                        この URL を VSL コンポーネントで使用できます
                      </p>
                    </div>

                    <VSLSection
                      videoUrl={selectedVideoUrl}
                      title="動画プレビュー"
                      description="アップロードした動画のプレビューです"
                    />
                  </>
                ) : (
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 text-center">
                    <div className="text-4xl text-gray-400 mb-4">📹</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      動画が選択されていません
                    </h3>
                    <p className="text-gray-400 mb-4">
                      アップロードタブで動画をアップロードするか、管理タブで既存の動画を選択してください
                    </p>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => setActiveTab('upload')}
                        className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        アップロード
                      </button>
                      <button
                        onClick={() => setActiveTab('manage')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        管理
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* 使用方法 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6"
          >
            <h3 className="text-blue-400 font-medium mb-4">💡 使用方法</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-medium mb-2">1. アップロード</h4>
                <p>動画ファイルをドラッグ&ドロップまたはクリックしてアップロード</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">2. 管理</h4>
                <p>アップロードした動画の一覧表示、選択、削除</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">3. プレビュー</h4>
                <p>選択した動画のプレビューとURL確認</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}