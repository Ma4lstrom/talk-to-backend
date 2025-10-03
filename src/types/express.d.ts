// src/types/express.d.ts
import 'express';
import 'express-session';

declare global {
  namespace Express {
    interface Request {
      flash(type: string, message: string | string[]): void;
      flash(type: string): string[];
    }
  }
}

declare module 'express-session' {
  interface SessionData {
    user?: {
      username: string;
      email: string;
      role: string;
      token: string;
    };
  }
}
