import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { TtsService } from './tts.service';

@Controller('tts')
export class TtsController {
  constructor(private readonly ttsService: TtsService) {}

  @Post('generate')
  async generate(@Body('text') text: string, @Res() res: Response) {
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const wavData = await this.ttsService.synthesize(text);

    res.setHeader('Content-Type', 'audio/wav');
    res.setHeader('Content-Length', wavData.length);
    res.send(wavData);
  }
}
