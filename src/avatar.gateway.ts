import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class AvatarGateway {
  @WebSocketServer() server: Server;

  joinRoom(socket: Socket, room: string) {
    socket.join(room);
  }

  @SubscribeMessage('join')
  handleJoin(@ConnectedSocket() socket: Socket, @MessageBody() room: string) {
    console.log(`Client joined room ${room}`);
    socket.join(room);
  }

  sendSpeechChunk(room: string, chunk: string) {
    this.server.to(room).emit('AvatarSpeechChunk', chunk);
  }

  sendSpeechEnd(room: string) {
    this.server.to(room).emit('AvatarSpeechEnd');
  }
}
