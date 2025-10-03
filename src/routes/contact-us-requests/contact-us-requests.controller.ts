import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactUsRequestsService } from './contact-us-requests.service';
import { CreateContactUsRequestDto } from './dto/create-contact-us-request.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('/contact')
export class ContactUsRequestsController {
  constructor(
    private readonly contactUsRequestsService: ContactUsRequestsService,
  ) {}

  @Post()
  create(@Body() createContactUsRequestDto: CreateContactUsRequestDto) {
    return this.contactUsRequestsService.create(createContactUsRequestDto);
  }

  @Get()
  findAll() {
    return this.contactUsRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactUsRequestsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactUsRequestsService.remove(+id);
  }
}
