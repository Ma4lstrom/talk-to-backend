import { Body, Controller, Post, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredsDto } from './Dto/auth.dto';
import { AccountInfoDto } from './Dto/accountInfo.dto';
import { Role } from 'generated/prisma';
import type { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: AuthCredsDto) {
    const jwt = await this.authService.login(body.email, body.password);

    return jwt;
  }

  @Post('/admin/login')
  async adminLogin(
    @Body() body: AuthCredsDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { email, password } = body;

    // validation
    if (!email || !password) {
      req.flash('error', 'Email and password are required');
      return res.redirect('/login');
    }

    const jwt = await this.authService.login(email, password);

    if (!jwt) {
      req.flash('error', 'Invalid Credentials');
      return res.redirect('/login');
    }

    res.cookie('jwt', jwt.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    req.flash('success', 'Logged in Successfully');
    return res.redirect('/admin/dashboard'); // real redirect
  }

  @Post('/register')
  async register(@Body() body: AccountInfoDto) {
    const { email, name, password } = body;
    const user = await this.authService.register(
      email,
      password,
      name,
      Role.USER,
    );

    return 'User Registered Successfully.';
  }

  @Post('/admin/register')
  async adminRegister(@Body() body: AccountInfoDto) {
    const { email, name, password } = body;
    const user = await this.authService.register(
      email,
      password,
      name,
      Role.ADMIN,
    );

    return 'Admin User Registered Successfully.';
  }
}
