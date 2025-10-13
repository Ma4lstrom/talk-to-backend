import { IsString, IsEmail, IsUrl, IsInt } from 'class-validator';

export class ChatDto {
  @IsString()
  message: string;
  @IsString()
  personality: string;
}
