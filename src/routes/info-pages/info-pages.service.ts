import { Injectable } from '@nestjs/common';
import { CreateInfoPageDto } from './dto/create-info-page.dto';
import { UpdateInfoPageDto } from './dto/update-info-page.dto';
import { PrismaService } from 'src/prisma.service';
import { InfoPages, Prisma, User } from 'generated/prisma';

@Injectable()
export class InfoPagesService {
  constructor(private prisma: PrismaService) {}

  async formSlug(name: string) {
    return name
      .toString() // Convert to string
      .normalize('NFD') // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .toLowerCase() // Lowercase
      .trim() // Remove surrounding spaces
      .replace(/[^a-z0-9\s-]/g, '') // Remove invalid chars
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/-+/g, '-');
  }

  async create(createInfoPageDto: CreateInfoPageDto) {
    const { pageName, pageBody } = createInfoPageDto;
    const slug = await this.formSlug(createInfoPageDto.pageName);
    const data = { pageName, pageBody, slug };
    const page = await this.prisma.infoPages.create({
      data,
    });

    return page;
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.InfoPagesWhereUniqueInput;
    where?: Prisma.InfoPagesWhereInput;
    orderBy?: Prisma.InfoPagesOrderByWithRelationInput;
  }): Promise<InfoPages[]> {
    const { skip, take, cursor, where, orderBy } = params || {};
    return this.prisma.infoPages.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    const page = this.prisma.infoPages.findUnique({ where: { id } });

    return page;
  }

  findBySlug(slug: string) {
    const page = this.prisma.infoPages.findUnique({ where: { slug } });

    return page;
  }

  update(id: number, updateInfoPageDto: UpdateInfoPageDto) {
    const page = this.prisma.infoPages.update({
      data: updateInfoPageDto,
      where: { id },
    });

    return page;
  }

  remove(id: number) {
    const page = this.prisma.infoPages.delete({ where: { id } });

    return 'Page Deleted';
  }
}
