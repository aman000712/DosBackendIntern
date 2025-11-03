import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FqasectionService } from './fqasection.service';
import { CreateFqasectionDto } from './dto/create-fqasection.dto';
import { UpdateFqasectionDto } from './dto/update-fqasection.dto';

@Controller('fqasection')
export class FqasectionController {
  constructor(private readonly fqasectionService: FqasectionService) {}

  @Post()
  create(@Body() createFqasectionDto: CreateFqasectionDto) {
    return this.fqasectionService.create(createFqasectionDto);
  }

  @Get()
  findAll() {
    return this.fqasectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fqasectionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFqasectionDto: UpdateFqasectionDto) {
    return this.fqasectionService.update(id, updateFqasectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fqasectionService.remove(id);
  }
}
