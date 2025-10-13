import { IsEmail, IsNotEmpty, MinLength, IsEnum } from 'class-validator';
import { Role } from 'generated/prisma';

export class UpdateUserDto {
  @IsNotEmpty()
  name?: string;

  @IsEmail()
  email?: string;

  @MinLength(6)
  password?: string;

  @IsEnum(Role)
  role?: Role;
}
