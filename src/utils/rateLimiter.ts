interface RateLimitEntry {
  count: number;
  resetTime: number;
}

interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

class RateLimiter {
  private cache = new Map<string, RateLimitEntry>();
  private options: RateLimitOptions;

  constructor(options: RateLimitOptions) {
    this.options = options;
  }

  checkLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.cache.get(identifier);

    // Clean up expired entries periodically
    this.cleanup(now);

    if (!entry || now > entry.resetTime) {
      // New window or expired entry
      const resetTime = now + this.options.windowMs;
      this.cache.set(identifier, { count: 1, resetTime });
      return {
        allowed: true,
        remaining: this.options.maxRequests - 1,
        resetTime,
      };
    }

    if (entry.count >= this.options.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
      };
    }

    entry.count++;
    return {
      allowed: true,
      remaining: this.options.maxRequests - entry.count,
      resetTime: entry.resetTime,
    };
  }

  private cleanup(now: number) {
    const keysToDelete: string[] = [];
    this.cache.forEach((entry, key) => {
      if (now > entry.resetTime) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cache.delete(key));
  }
}

// Contact form rate limiter: 5 requests per 15 minutes per IP
export const contactRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
});

// Checkout session rate limiter: 10 requests per 15 minutes per IP
// Stripe公式推奨: 決済関連APIには厳格なレート制限を適用
export const checkoutRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10,
});

export function getClientIdentifier(request: Request): string {
  // Try to get real IP from headers (Vercel/proxy scenarios)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded !== null && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp !== null && realIp.length > 0) {
    return realIp;
  }

  // Fallback - in development this might be undefined
  return 'unknown-ip';
}