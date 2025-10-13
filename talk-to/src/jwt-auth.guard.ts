import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const res: Response = context.switchToHttp().getResponse();

    // If there is an error or no user (expired / invalid token)
    if (err || !user) {
      return res.redirect('/login'); // 👈 force redirect
    }

    return user;
  }
}
