import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const lowercaseEmail = email.toLowerCase();
    const user = await this.userService.user({ email: lowercaseEmail });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      // handle invalid
      return null;
    }
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
      user: user,
    };
  }

  async register(email: string, password: string, name: string, role: Role) {
    const bcryptPass = await bcrypt.hash(password, 10);
    const data = { email, password: bcryptPass, name, role };
    const createdUser = await this.userService.createUser(data);
    return createdUser;
  }
}
