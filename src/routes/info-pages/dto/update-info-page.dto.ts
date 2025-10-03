import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoPageDto } from './create-info-page.dto';
import { IsString } from 'class-validator';

export class UpdateInfoPageDto extends PartialType(CreateInfoPageDto) {
  @IsString()
  pageName?: string;
  @IsString()
  pageBody?: string;
  @IsString()
  slug?: string;
}
