import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SucessstoriesService } from './sucessstories.service';
import { CreateSucessstoryDto } from './dto/create-sucessstory.dto';
import { UpdateSucessstoryDto } from './dto/update-sucessstory.dto';

@Controller('sucessstories')
export class SucessstoriesController {
  constructor(private readonly sucessstoriesService: SucessstoriesService) {}

  @Post()
  create(@Body() createSucessstoryDto: CreateSucessstoryDto) {
    return this.sucessstoriesService.create(createSucessstoryDto);
  }

  @Get()
  findAll() {
    return this.sucessstoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucessstoriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSucessstoryDto: UpdateSucessstoryDto) {
    return this.sucessstoriesService.update(id, updateSucessstoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sucessstoriesService.remove(id);
  }
}
