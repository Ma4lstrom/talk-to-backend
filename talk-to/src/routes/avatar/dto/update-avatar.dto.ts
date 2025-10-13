import { PartialType } from '@nestjs/mapped-types';
import { CreateAvatarDto } from './create-avatar.dto';
import { IsString, IsEmail, IsUrl, IsInt } from 'class-validator';
export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {
  @IsString()
  readyPlayerMeId?: string;
  @IsString()
  name?: string;
  @IsString()
  personality?: string;
  @IsInt()
  userId: number;
}
