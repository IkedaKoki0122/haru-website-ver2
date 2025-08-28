'use client';

import { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';

interface CSRFHook {
  csrfToken: string | null;
  isLoading: boolean;
  error: string | null;
  refreshToken: () => Promise<void>;
}

/**
 * CSRFトークン管理用カスタムフック
 * 
 * セキュリティ要件：
 * - トークンの自動取得と更新
 * - エラーハンドリング
 * - トークンの期限管理
 */
export function useCSRF(): CSRFHook {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCSRFToken = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/csrf', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch CSRF token: ${response.status}`);
      }
      
      const data = await response.json();
      setCsrfToken(data.csrfToken);
      logger.debug('CSRF token fetched successfully', { 
        tokenPreview: data.csrfToken ? data.csrfToken.substring(0, 8) + '...' : 'none' 
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      logger.error('CSRF token fetch error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshToken = async (): Promise<void> => {
    await fetchCSRFToken();
  };

  // 初回マウント時にトークンを取得
  useEffect(() => {
    fetchCSRFToken();
  }, []);

  // 24時間ごとにトークンを更新（セキュリティベストプラクティス）
  useEffect(() => {
    const interval = setInterval(() => {
      if (csrfToken) {
        fetchCSRFToken();
      }
    }, 24 * 60 * 60 * 1000); // 24時間

    return () => clearInterval(interval);
  }, [csrfToken]);

  return {
    csrfToken,
    isLoading,
    error,
    refreshToken,
  };
}