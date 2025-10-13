import { Module } from '@nestjs/common';
import { InfoPagesService } from './info-pages.service';
import { InfoPagesController } from './info-pages.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InfoPagesController],
  providers: [InfoPagesService, PrismaService],
  exports: [InfoPagesService],
})
export class InfoPagesModule {}
