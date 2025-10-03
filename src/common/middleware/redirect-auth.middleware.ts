import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RedirectIfAuthenticatedMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.jwt;
    if (!token) return next();

    try {
      const payload = this.jwtService.verify(token);
      if (payload.role === 'ADMIN') {
        return res.redirect('/admin/dashboard'); // redirect immediately
      }
      return res.redirect('/login');
    } catch (err) {
      // invalid token, continue to login page
    }

    return next();
  }
}
