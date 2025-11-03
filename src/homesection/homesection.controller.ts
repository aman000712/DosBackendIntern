import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomesectionService } from './homesection.service';
import { CreateHomesectionDto } from './dto/create-homesection.dto';
import { UpdateHomesectionDto } from './dto/update-homesection.dto';

@Controller('homesection')
export class HomesectionController {
  constructor(private readonly homesectionService: HomesectionService) {}

  @Post()
  create(@Body() createHomesectionDto: CreateHomesectionDto) {
    return this.homesectionService.create(createHomesectionDto);
  }

  @Get()
  findAll() {
    return this.homesectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homesectionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomesectionDto: UpdateHomesectionDto) {
    return this.homesectionService.update(id, updateHomesectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homesectionService.remove(id);
  }
}
