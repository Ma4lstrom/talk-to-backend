import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import ejs from 'ejs';
import path from 'path';
import { UserService } from './routes/users/user.service';
import { AvatarService } from './routes/avatar/avatar.service';
import { ContactUsRequestsService } from './routes/contact-us-requests/contact-us-requests.service';
import { InfoPagesService } from './routes/info-pages/info-pages.service';
import { RolesGuard } from './role.guard';
import { Roles } from './routes/auth/roles.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly avatarService: AvatarService,
    private readonly contactUsRequestsService: ContactUsRequestsService,
    private readonly infoPagesService: InfoPagesService,
  ) {}

  @Post()
  getHostDetails(@Req() request: Request, @Body() Body: any): Object {
    const host = request.host;
    const hostName = request.hostname;
    return { host: host, hostname: hostName, body: Body.name, type: Body.type };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.clearCookie('jwt');
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  }


  @Get('login')
  getLogin(@Req() req: Request, @Res() res: Response) {
    res.render('auth/login', {
      title: 'login',
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/dashboard')
  async getDashboard(@Req() req: Request, @Res() res: Response) {
    const dashboardHtml = await ejs.renderFile(
      path.join(__dirname, '../views/dashboard.ejs'),
      { user: req.user },
    );
    res.render('layouts/admin', {
      title: 'Dashboard',
      body: dashboardHtml,
      currentPath: '/admin/dashboard',
      user: req.user,
    });
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/users')
  async getUserDashboard(@Req() req: Request, @Res() res: Response) {
    const search = req.query.search?.toString() || '';
    const users = await this.userService.users({
      where: {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
        ],
      },
      // orderBy: { name: 'asc' },
    });
    const dashboardHtml = await ejs.renderFile(
      path.join(__dirname, '../views/admin/user/userDashboard.ejs'),
      { user: req.user, users: users, search },
    );
    res.render('layouts/admin', {
      title: 'User Dashboard',
      body: dashboardHtml,
      currentPath: '/admin/users',
      user: req.user,
    });
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/avatars')
  async getAvatarsDashboard(@Req() req: Request, @Res() res: Response) {
    const avatars = await this.avatarService.findAll();
    const dashboardHtml = await ejs.renderFile(
      path.join(__dirname, '../views/admin/avatar/avatarsDashboard.ejs'),
      { user: req.user, avatars: avatars },
    );
    res.render('layouts/admin', {
      title: 'Avatar Dashboard',
      body: dashboardHtml,
      currentPath: '/admin/avatars',
      user: req.user,
    });
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/contact-us')
  async getContactsDashboard(@Req() req: Request, @Res() res: Response) {
    const requests = await this.contactUsRequestsService.findAll();
    const dashboardHtml = await ejs.renderFile(
      path.join(__dirname, '../views/admin/contacts/contactUsDashboard.ejs'),
      { user: req.user, requests: requests },
    );
    res.render('layouts/admin', {
      title: 'Contact Request Dashboard',
      body: dashboardHtml,
      currentPath: '/admin/contact-us',
      user: req.user,
    });
  }

  @Get()
  redirectToLogin(@Res() res: Response) {
  return res.redirect('/login');
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/info-pages')
  async getInfoPagesDashboard(@Req() req: Request, @Res() res: Response) {
    const search = req.query.search?.toString() || '';
    const pages = await this.infoPagesService.findAll({
      where: {
        OR: [
          { pageName: { contains: search, mode: 'insensitive' } },
          { pageBody: { contains: search, mode: 'insensitive' } },
        ],
      },
      orderBy: { pageName: 'asc' },
    });
    const dashboardHtml = await ejs.renderFile(
      path.join(__dirname, '../views/admin/infoPages/infoPagesDashboard.ejs'),
      { user: req.user, pages: pages, search },
    );
    res.render('layouts/admin', {
      title: 'Info Pages Dashboard',
      body: dashboardHtml,
      currentPath: '/admin/info-pages',
      user: req.user,
    });
  }

  @Get('/avatar/view/:avatarID')
  async getAvatarView(
    @Req() req: Request,
    @Res() res: Response,
    @Param('avatarID') avatarID: string,
  ) {
    const avatar = await this.avatarService.findOne(Number(avatarID));
    console.log('avatar fetched', {
      user: req.user,
      glb_url: `${req.protocol}://${req.get('host')}${avatar?.glbURL}`,
      avatar_id: avatar?.id,
      avatar_name: avatar?.name,
    });

    if (!avatar) {
      return 'error rendering avatar';
    }

    res.render('client/avatar-view.ejs', {
      user: req.user,
      glb_url: `${req.protocol}://${req.get('host')}${avatar?.glbURL}`,
      avatar_id: avatar.id,
      avatar_name: avatar.name,
    });
  }
}
