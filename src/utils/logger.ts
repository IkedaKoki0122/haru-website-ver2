/**
 * Secure logging utility for production applications
 * Follows Next.js security best practices by preventing sensitive data exposure
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
  [key: string]: any;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isClient = typeof window !== 'undefined';

  private sanitizeData(data: any): any {
    if (!data) return data;
    
    // Remove sensitive fields that might contain credentials or personal data
    const sensitiveFields = ['password', 'token', 'key', 'secret', 'authorization', 'cookie'];
    
    if (typeof data === 'object' && data !== null) {
      const sanitized = { ...data };
      
      for (const field of sensitiveFields) {
        if (field in sanitized) {
          sanitized[field] = '[REDACTED]';
        }
      }
      
      return sanitized;
    }
    
    return data;
  }

  private log(level: LogLevel, message: string, context?: LogContext): void {
    // Always allow error and warn logs in production for debugging
    const shouldLog = this.isDevelopment || level === 'error' || level === 'warn';
    
    if (!shouldLog) return;

    const timestamp = new Date().toISOString();
    const sanitizedContext = context ? this.sanitizeData(context) : undefined;
    
    const logEntry = {
      timestamp,
      level,
      message,
      ...(sanitizedContext && { context: sanitizedContext }),
      environment: process.env.NODE_ENV,
      ...(this.isClient && { userAgent: navigator?.userAgent }),
    };

    switch (level) {
      case 'error':
        console.error(JSON.stringify(logEntry));
        break;
      case 'warn':
        console.warn(JSON.stringify(logEntry));
        break;
      case 'info':
        console.info(JSON.stringify(logEntry));
        break;
      case 'debug':
        if (this.isDevelopment) {
          console.log(JSON.stringify(logEntry));
        }
        break;
    }
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error | any, context?: LogContext): void {
    const errorContext = {
      ...context,
      ...(error instanceof Error && {
        error: {
          name: error.name,
          message: error.message,
          stack: this.isDevelopment ? error.stack : undefined,
        }
      }),
      ...(error && !(error instanceof Error) && { errorData: this.sanitizeData(error) })
    };
    
    this.log('error', message, errorContext);
  }

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, context);
  }
}

export const logger = new Logger();