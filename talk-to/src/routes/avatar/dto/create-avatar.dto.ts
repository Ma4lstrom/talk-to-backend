import { IsString, IsEmail, IsUrl, IsInt } from 'class-validator';

export class CreateAvatarDto {
  @IsString()
  readyPlayerMeId: string;
  @IsString()
  name: string;
  @IsString()
  personality: string;
  @IsInt()
  userId: number;
}
