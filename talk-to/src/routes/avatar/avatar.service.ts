import { Header, Headers, HttpException, Injectable } from '@nestjs/common';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { PrismaService } from 'src/prisma.service';
import fetch from 'node-fetch';
import * as path from 'path';
import { promises as fs } from 'fs';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { v4 as uuid } from 'uuid';
import { HttpService } from '@nestjs/axios'; // 👈 bring this in
import { firstValueFrom } from 'rxjs';
import { TtsService } from '../tts/tts.service';
import { AvatarGateway } from 'src/avatar.gateway';

@Injectable()
export class AvatarService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly http: HttpService,
    private readonly ttsService: TtsService,
    private readonly avatarGateway: AvatarGateway,
  ) {}

  async create(createAvatarDto: CreateAvatarDto) {
    const { name, personality, readyPlayerMeId, userId } = createAvatarDto;
    const glbUrl = `https://models.readyplayer.me/${readyPlayerMeId}.glb`;

    try {
      // 1. Fetch GLB file
      const response = await fetch(glbUrl);
      if (!response.ok) {
        throw new HttpException(
          `Failed to download GLB from ${glbUrl}`,
          response.status,
        );
      }

      const buffer = Buffer.from(await response.arrayBuffer());

      // 2. Decide where to store it locally
      const avatarsDir = path.join(process.cwd(), 'public', 'avatars');
      await fs.mkdir(avatarsDir, { recursive: true });

      const filePath = path.join(avatarsDir, `${readyPlayerMeId}.glb`);
      await fs.writeFile(filePath, buffer);
      console.log('Writing avatar GLB to:', filePath);

      // 3. Save DB record with local path reference
      const avatar = await this.prismaService.avatar.create({
        data: {
          name,
          personality,
          userId,
          readyPlayerMeId,
          glbURL: `/avatars/${readyPlayerMeId}.glb`,
        },
      });

      return {
        message: 'Avatar created successfully',
        avatar,
      };
    } catch (err) {
      console.error('Avatar creation error:', err);
      throw new HttpException('Failed to create avatar', err.status || 500);
    }
  }

  async chatAndSpeak(
    userMessage: string,
    personality: string,
    avatarId: number,
  ) {
    const response = await firstValueFrom(
      this.http.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            { role: 'system', content: personality },
            { role: 'user', content: userMessage },
          ],
        },
        {
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
        },
      ),
    );

    const aiReply = response.data.choices[0].message.content;

    await this.ttsService.synthesizeStream(
      aiReply,
      avatarId,
      (chunk) => {
        this.avatarGateway.sendSpeechChunk(`avatar.${avatarId}`, chunk);
      },
      () => {
        this.avatarGateway.sendSpeechEnd(`avatar.${avatarId}`);
      },
    );

    return { reply: aiReply, streaming: true };
  }

  async findAll() {
    const avatars = await this.prismaService.avatar.findMany({});
    return avatars;
  }

  async findOne(avatar_id: number) {
    const avatar = await this.prismaService.avatar.findFirst({
      where: { id: avatar_id },
    });
    return avatar;
  }

  async findUsersAvatars(userId: number) {
    const avatars = await this.prismaService.avatar.findMany({
      where: { userId },
    });
    return avatars;
  }

  async findClientAvatars(userId: number) {
    const avatars = await this.prismaService.avatar.findMany({
      where: { userId: userId },
    });

    return avatars;
  }

  async update(id: number, updateAvatarDto: UpdateAvatarDto) {
    const avatar = await this.prismaService.avatar.update({
      data: updateAvatarDto,
      where: { id },
    });

    return 'Avatar Updated Successfully.';
  }

  async remove(id: number) {
    const avatar = await this.prismaService.avatar.delete({ where: { id } });
    return 'Avatar deleted successfully';
  }
}
