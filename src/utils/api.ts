/**
 * CSRF保護付きAPIクライアント
 * 
 * セキュリティ要件：
 * - すべてのPOSTリクエストにCSRFトークンを自動付与
 * - エラーハンドリング
 * - TypeScript型安全性
 */

interface APIRequestOptions extends RequestInit {
  csrfToken?: string;
}

interface APIResponse<T = any> {
  data?: T;
  error?: string;
  success?: boolean;
}

/**
 * CSRF保護付きfetch関数
 */
export async function apiRequest<T = any>(
  url: string,
  options: APIRequestOptions = {}
): Promise<APIResponse<T>> {
  const { csrfToken, headers = {}, ...rest } = options;

  // POSTリクエストの場合、CSRFトークンを必須とする
  if (rest.method === 'POST' && !csrfToken) {
    throw new Error('CSRF token is required for POST requests');
  }

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  // CSRFトークンをヘッダーに追加
  if (csrfToken) {
    requestHeaders['X-CSRF-Token'] = csrfToken;
  }

  try {
    const response = await fetch(url, {
      credentials: 'same-origin',
      ...rest,
      headers: requestHeaders,
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        error: responseData.error || `HTTP ${response.status}`,
      };
    }

    return {
      data: responseData,
      success: true,
    };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('API request error:', error);
    }
    return {
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * お問い合わせAPI呼び出し
 */
export async function submitContactForm(
  formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  },
  csrfToken: string
) {
  return apiRequest('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    csrfToken,
  });
}

/**
 * カウンセリング申し込みAPI呼び出し
 */
export async function submitCounselingForm(
  formData: {
    name: string;
    email: string;
    phone: string;
    experience: string;
    goal: string;
    preferredDate?: string;
    preferredTime?: string;
    message?: string;
  },
  csrfToken: string
) {
  return apiRequest('/api/counseling', {
    method: 'POST',
    body: JSON.stringify(formData),
    csrfToken,
  });
}

/**
 * Stripe決済セッション作成API呼び出し
 */
export async function createCheckoutSession(
  courseType: string,
  csrfToken: string
) {
  return apiRequest<{ sessionId: string; url: string }>('/api/create-checkout-session', {
    method: 'POST',
    body: JSON.stringify({ courseType }),
    csrfToken,
  });
}