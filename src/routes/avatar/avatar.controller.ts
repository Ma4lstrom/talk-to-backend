import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { AuthGuard } from '@nestjs/passport';
import { ChatDto } from './dto/chat-dto';

@UseGuards(AuthGuard('jwt'))
@Controller('/avatar')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Post()
  create(@Body() createAvatarDto: CreateAvatarDto) {
    return this.avatarService.create(createAvatarDto);
  }

  @Get()
  findAll() {
    return this.avatarService.findAll();
  }

  @Get('/getUserAvatars/:id')
  findAllUserAvatars(@Param('id') id: string) {
    return this.avatarService.findUsersAvatars(+id);
  }

  @Get('/getClientAvatars')
  findClientAvatars(@Headers('userId') userId: number) {
    return this.avatarService.findClientAvatars(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.avatarService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvatarDto: UpdateAvatarDto) {
    return this.avatarService.update(+id, updateAvatarDto);
  }

  @Post('/:id/chat')
  chatwithAva(@Param('id') id: string, @Body() receivedChatDto: ChatDto) {
    console.log('Chat request received for avatar:', id, receivedChatDto);
    return this.avatarService.chatAndSpeak(
      receivedChatDto.message,
      receivedChatDto.personality,
      Number(id),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avatarService.remove(+id);
  }
}
