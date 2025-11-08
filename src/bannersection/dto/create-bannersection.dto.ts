import { ApiProperty } from '@nestjs/swagger';

export enum PageOptions {
  ABOUT = 'about',
  HOME = 'home',
  COURSES = 'courses',
  CONTACT = 'contact',
}

export class CreateBannersectionDto {
  @ApiProperty({
    enum: PageOptions,
    description: 'select the page section',
  })
  page: string;

  @ApiProperty()
  imageid: any;

  @ApiProperty()
  title: string;
}
