import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  UseGuards,
  Body,
  BadRequestException,
  Delete,
  HttpCode,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { Request } from 'express';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { CreateUserDto } from './DTO/create-user.dto';

@UseGuards(JwtAuthGuard)
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserInfo(@Req() request: Request, @Param('id') id: string) {
    const user = await this.userService.user({ id: Number(id) });
    if (!user) {
      return 'User not found.';
    }
    return { id: user.id, email: user.email, name: user.name };
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;
    if (!email || !name || !password) {
      throw new BadRequestException(
        'Missing required fields: name, email, or password',
      );
    }
    const user = await this.userService.createUser(createUserDto);
    return { status: 'Success', User: user };
  }

  @Get()
  async getUsers() {
    const users = await this.userService.users();
    return users;
  }

  @HttpCode(204) // No content response for DELETE
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    const numericId = Number(id);

    if (isNaN(numericId)) {
      throw new BadRequestException('ID must be a number');
    }

    const deleted = await this.userService.deleteUser({ id: numericId });

    if (!deleted) {
      throw new NotFoundException(`User with ID ${numericId} not found`);
    }
  }

  @Put('/update/:id')
  async editUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }
}
