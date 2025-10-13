import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './DTO/update-user.dto';
import { CreateUserDto } from './DTO/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params || {};
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUser(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: { name: data.name, email: data.email, role: data.role },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    console.log(user);

    return 'User created successfully';
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
