import { IsString, IsEmail } from 'class-validator';

export class CreateContactUsRequestDto {
  @IsEmail()
  email: string;
  @IsString()
  message: string;
}
