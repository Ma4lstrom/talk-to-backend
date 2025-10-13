import { Module } from '@nestjs/common';
import { ContactUsRequestsService } from './contact-us-requests.service';
import { ContactUsRequestsController } from './contact-us-requests.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContactUsRequestsController],
  providers: [ContactUsRequestsService, PrismaService],
  exports: [ContactUsRequestsService],
})
export class ContactUsRequestsModule {}
