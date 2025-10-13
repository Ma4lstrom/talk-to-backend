import { IsString } from 'class-validator';

export class CreateInfoPageDto {
  @IsString()
  pageName: string;
  @IsString()
  pageBody: string;
  @IsString()
  slug: string;
}
