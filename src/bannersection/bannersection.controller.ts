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

  @Get()
  findAll() {
    return this.bannersectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannersectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannersectionDto: UpdateBannersectionDto) {
    return this.bannersectionService.update(+id, updateBannersectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannersectionService.remove(+id);
  }
}
