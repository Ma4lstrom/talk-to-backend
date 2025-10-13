import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  Res,
} from '@nestjs/common';
import { InfoPagesService } from './info-pages.service';
import { CreateInfoPageDto } from './dto/create-info-page.dto';
import { UpdateInfoPageDto } from './dto/update-info-page.dto';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';

@Controller('info-pages')
export class InfoPagesController {
  constructor(private readonly infoPagesService: InfoPagesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createInfoPageDto: CreateInfoPageDto) {
    return this.infoPagesService.create(createInfoPageDto);
  }

  @Get()
  findAll() {
    return this.infoPagesService.findAll({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.infoPagesService.findOne(+id);
  // }

  @Get(':slug')
  async findOneAsHtml(@Param('slug') slug: string, @Res() res: Response) {
    const page = await this.infoPagesService.findBySlug(slug);
    if (!page) {
      return { error: 'Page not found' };
    }

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            padding: 20px;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: auto;
          }
        </style>
      </head>
      <body>
        ${page.pageBody}
      </body>
    </html>
  `;
    res.setHeader('Content-Type', 'text/html');
    return res.send(html);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInfoPageDto: UpdateInfoPageDto,
  ) {
    return this.infoPagesService.update(+id, updateInfoPageDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infoPagesService.remove(+id);
  }
}
