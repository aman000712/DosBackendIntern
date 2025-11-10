import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannersectionService } from './bannersection.service';
import { CreateBannersectionDto } from './dto/create-bannersection.dto';
import { UpdateBannersectionDto } from './dto/update-bannersection.dto';

@Controller('bannersection')
export class BannersectionController {
  constructor(private readonly bannersectionService: BannersectionService) {}

  @Post()
  create(@Body() createBannersectionDto: CreateBannersectionDto) {
    return this.bannersectionService.create(createBannersectionDto);
  }

  @Get('pages/:page')
  findAll(@Param('page') page: string) {
    return this.bannersectionService.findAll(page);
  }

  @Get(':id/id')
  findOne(@Param('id') id: string) {
    return this.bannersectionService.findOne(id);
  }

  @Patch('page/:page')
  update(@Param('page') id: string, @Body() updateBannersectionDto: UpdateBannersectionDto) {
    return this.bannersectionService.update(id, updateBannersectionDto);
  }

}
