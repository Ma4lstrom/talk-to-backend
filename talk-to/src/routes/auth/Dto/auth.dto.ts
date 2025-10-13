import { IsEmail, IsString } from 'class-validator';

export class AuthCredsDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
