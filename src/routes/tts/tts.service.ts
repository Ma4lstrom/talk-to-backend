import { Injectable } from '@nestjs/common';

import * as crypto from 'crypto';
import { AvatarGateway } from 'src/avatar.gateway';
import WebSocket from 'ws';

@Injectable()
export class TtsService {
  constructor(private readonly avatarGateway: AvatarGateway) {}

  private host = 'tts-api-sg.xf-yun.com';
  private appId = process.env.TTS_APPID || null;
  private apiKey = process.env.TTS_API_KEY || null;
  private apiSecret = process.env.TTS_API_SECRET || null;

  private createAuthUrl(): string {
    const date = new Date().toUTCString();

    if (!this.apiSecret) {
      return 'Error has occured.';
    }

    const signatureOrigin = `host: ${this.host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;
    const signatureSha = crypto
      .createHmac('sha256', this.apiSecret)
      .update(signatureOrigin)
      .digest('base64');

    const authorizationOrigin = `api_key="${this.apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signatureSha}"`;
    const authorization = Buffer.from(authorizationOrigin).toString('base64');

    const query = new URLSearchParams({
      authorization,
      date,
      host: this.host,
    });

    return `wss://${this.host}/v2/tts?${query.toString()}`;
  }

  private createWavHeader(
    dataLength: number,
    sampleRate = 16000,
    channels = 1,
    bitsPerSample = 16,
  ): Buffer {
    const header = Buffer.alloc(44);
    header.write('RIFF', 0);
    header.writeUInt32LE(36 + dataLength, 4);
    header.write('WAVE', 8);
    header.write('fmt ', 12);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(1, 20);
    header.writeUInt16LE(channels, 22);
    header.writeUInt32LE(sampleRate, 24);
    header.writeUInt32LE((sampleRate * channels * bitsPerSample) / 8, 28);
    header.writeUInt16LE((channels * bitsPerSample) / 8, 32);
    header.writeUInt16LE(bitsPerSample, 34);
    header.write('data', 36);
    header.writeUInt32LE(dataLength, 40);
    return header;
  }

  async synthesize(text: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const url = this.createAuthUrl();
      const ws = new WebSocket(url);

      let audioData: Buffer[] = [];

      ws.on('open', () => {
        const payload = {
          common: { app_id: this.appId },
          business: {
            aue: 'raw',
            auf: 'audio/L16;rate=16000',
            vcn: 'xiaoyan',
            tte: 'utf8',
          },
          data: {
            status: 2,
            text: Buffer.from(text).toString('base64'),
          },
        };
        ws.send(JSON.stringify(payload));
      });

      ws.on('message', (msg: WebSocket.Data) => {
        const message = JSON.parse(msg.toString());

        if (message.code && message.code !== 0) {
          reject(new Error(`TTS error: ${message.message || 'Unknown error'}`));
          ws.close();
          return;
        }

        if (message.data?.audio) {
          audioData.push(Buffer.from(message.data.audio, 'base64'));
        }

        if (message.data?.status === 2) {
          ws.close();
        }
      });

      ws.on('close', () => {
        const rawAudio = Buffer.concat(audioData);
        const header = this.createWavHeader(rawAudio.length);
        resolve(Buffer.concat([header, rawAudio]));
      });

      ws.on('error', (err) => reject(err));
    });
  }

  async synthesizeStream(
    text: string,
    avatarId: number,
    onChunk?: (chunk: string) => void,
    onEnd?: () => void,
  ): Promise<void> {
    const url = this.createAuthUrl();
    const ws = new WebSocket(url);

    ws.on('open', () => {
      ws.send(
        JSON.stringify({
          common: { app_id: this.appId },
          business: {
            aue: 'raw',
            auf: 'audio/L16;rate=16000',
            vcn: 'xiaoyan',
            tte: 'utf8',
          },
          data: {
            status: 2,
            text: Buffer.from(text).toString('base64'),
          },
        }),
      );
    });

    ws.on('message', (msg: WebSocket.Data) => {
      const message = JSON.parse(msg.toString());

      if (message.code && message.code !== 0) {
        console.error('TTS error:', message);
        ws.close();
        return;
      }

      if (message.data?.audio && onChunk) {
        onChunk(message.data.audio);
      }

      if (message.data?.status === 2) {
        ws.close();
      }
    });

    ws.on('close', () => {
      console.log('TTS WebSocket closed.');
      if (onEnd) onEnd();
    });

    ws.on('error', (err) => {
      console.error('TTS streaming error:', err);
      ws.close();
    });
  }
}
