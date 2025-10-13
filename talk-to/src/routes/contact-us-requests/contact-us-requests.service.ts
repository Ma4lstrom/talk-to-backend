import { Injectable } from '@nestjs/common';
import { CreateContactUsRequestDto } from './dto/create-contact-us-request.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContactUsRequestsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createContactUsRequestDto: CreateContactUsRequestDto) {
    const { email, message } = createContactUsRequestDto;
    const data = { email, message };
    const request = await this.prismaService.contactUsRequest.create({ data });
    if (!request) {
      return 'Creation of request failed';
    }
    return 'Created Request Successfully.';
  }

  async findAll() {
    const requests = await this.prismaService.contactUsRequest.findMany({});

    return requests;
  }

  async findOne(id: number) {
    const request = await this.prismaService.contactUsRequest.findFirst({
      where: { id },
    });

    return request;
  }

  async remove(id: number) {
    const request = await this.prismaService.contactUsRequest.delete({
      where: { id },
    });

    return request;
  }
}
