'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoUploadProps {
  onUploadComplete?: (videoUrl: string) => void;
  maxSize?: number; // MB
}

interface UploadedVideo {
  url: string;
  downloadUrl: string;
  pathname: string;
  size: number;
}

export default function VideoUpload({ 
  onUploadComplete, 
  maxSize = 100 
}: VideoUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedVideo, setUploadedVideo] = useState<UploadedVideo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // ファイルサイズチェック
    if (file.size > maxSize * 1024 * 1024) {
      setError(`ファイルサイズが${maxSize}MBを超えています`);
      return;
    }

    // ファイル形式チェック
    const allowedTypes = ['video/mp4', 'video/webm', 'video/mov', 'video/avi', 'video/x-msvideo'];
    if (!allowedTypes.includes(file.type)) {
      setError('対応していないファイル形式です。MP4、WebM、MOV、AVIファイルのみアップロード可能です。');
      return;
    }

    setError(null);
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // アップロード進行状況をシミュレート
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const response = await fetch(`/api/upload-video?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'アップロードに失敗しました');
      }

      const result: UploadedVideo = await response.json();
      setUploadedVideo(result);
      onUploadComplete?.(result.url);

    } catch (error) {
      console.error('アップロードエラー:', error);
      setError(error instanceof Error ? error.message : 'アップロードに失敗しました');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
      handleFileSelect({ target: { files: dataTransfer.files } } as any);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">動画アップロード</h3>
        
        {!uploadedVideo && (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
              disabled={isUploading}
            />
            
            {isUploading ? (
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
                <p className="text-gray-300">アップロード中...</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400">{uploadProgress}%</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-4xl text-gray-400">📹</div>
                <p className="text-gray-300">
                  動画ファイルをドラッグ&ドロップまたはクリックして選択
                </p>
                <p className="text-sm text-gray-500">
                  MP4, WebM, MOV, AVI ({maxSize}MB以下)
                </p>
              </div>
            )}
          </div>
        )}

        {uploadedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">✅ アップロード完了</h4>
              <p className="text-sm text-gray-300 break-all">
                {uploadedVideo.pathname}
              </p>
              <p className="text-sm text-gray-400">
                サイズ: {formatFileSize(uploadedVideo.size)}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <a
                href={uploadedVideo.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                プレビュー
              </a>
              <button
                onClick={() => {
                  setUploadedVideo(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                新しい動画
              </button>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 bg-red-500/20 border border-red-500/30 rounded-lg p-3"
          >
            <p className="text-red-400 text-sm">❌ {error}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}