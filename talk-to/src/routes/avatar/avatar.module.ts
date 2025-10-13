import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarController } from './avatar.controller';
import { PrismaService } from 'src/prisma.service';
import { TtsService } from '../tts/tts.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AvatarGateway } from 'src/avatar.gateway';

@Module({
  imports: [HttpModule],
  controllers: [AvatarController],
  providers: [AvatarService, PrismaService, TtsService, AvatarGateway],
  exports: [AvatarService],
})
export class AvatarModule {}
