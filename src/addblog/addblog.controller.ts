import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddblogService } from './addblog.service';
import { CreateAddblogDto } from './dto/create-addblog.dto';
import { UpdateAddblogDto } from './dto/update-addblog.dto';

@Controller('addblog')
export class AddblogController {
  constructor(private readonly addblogService: AddblogService) {}

  @Post()
  create(@Body() createAddblogDto: CreateAddblogDto) {
    return this.addblogService.create(createAddblogDto);
  }

  @Get()
  findAll() {
    return this.addblogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addblogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddblogDto: UpdateAddblogDto) {
    return this.addblogService.update(id, updateAddblogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addblogService.remove(id);
  }
}
