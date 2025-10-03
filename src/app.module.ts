import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './routes/users/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthModule } from './routes/auth/auth.module';
import { InfoPagesModule } from './routes/info-pages/info-pages.module';
import { ContactUsRequestsModule } from './routes/contact-us-requests/contact-us-requests.module';
import { AvatarModule } from './routes/avatar/avatar.module';
import { JwtModule } from '@nestjs/jwt';
import { RedirectIfAuthenticatedMiddleware } from './common/middleware/redirect-auth.middleware';

@Module({
  imports: [
    UserModule,
    AuthModule,
    InfoPagesModule,
    ContactUsRequestsModule,
    AvatarModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'dev-secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [JwtStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RedirectIfAuthenticatedMiddleware).forRoutes('/login');
  }
}
