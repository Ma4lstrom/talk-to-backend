import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptor/logger.interceptor';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*', // For dev — adjust for production
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id'],
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(
    session({
      secret: process.env.JWT_SECRET || 'dev-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    }),
  );

  app.use(cookieParser());

  app.use(flash());

  app.use('/assets', express.static(join(__dirname, '..', 'public/assets')));
  app.use('/avatars', express.static(join(__dirname, '..', 'public/avatars')));

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use((req, res, next) => {
    res.locals.messages = req.flash('error'); // for errors
    res.locals.success = req.flash('success'); // for success
    res.locals.baseUrl = '/public'; // or process.env.BASE_URL
    next();
  });
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
