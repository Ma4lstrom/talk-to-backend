import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

function extractJwtFromCookie(req: any): string | null {
  if (req && req.cookies && req.cookies.jwt) {
    return req.cookies.jwt;
  }
  return null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        extractJwtFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'dev-secret',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      name: payload.name,
      email: payload.email,
      role: payload.role,
    };
  }
}
