import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddcourseService } from './addcourse.service';
import { CreateAddcourseDto } from './dto/create-addcourse.dto';
import { UpdateAddcourseDto } from './dto/update-addcourse.dto';

@Controller('addcourse')
export class AddcourseController {
  constructor(private readonly addcourseService: AddcourseService) {}

  @Post()
  create(@Body() createAddcourseDto: CreateAddcourseDto) {
    return this.addcourseService.create(createAddcourseDto);
  }

  @Get()
  findAll() {
    return this.addcourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addcourseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddcourseDto: UpdateAddcourseDto) {
    return this.addcourseService.update(id, updateAddcourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addcourseService.remove(id);
  }
}
