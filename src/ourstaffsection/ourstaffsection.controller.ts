import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurstaffsectionService } from './ourstaffsection.service';
import { CreateOurstaffsectionDto } from './dto/create-ourstaffsection.dto';
import { UpdateOurstaffsectionDto } from './dto/update-ourstaffsection.dto';

@Controller('ourstaffsection')
export class OurstaffsectionController {
  constructor(private readonly ourstaffsectionService: OurstaffsectionService) {}

  @Post()
  create(@Body() createOurstaffsectionDto: CreateOurstaffsectionDto) {
    return this.ourstaffsectionService.create(createOurstaffsectionDto);
  }

  @Get()
  findAll() {
    return this.ourstaffsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourstaffsectionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurstaffsectionDto: UpdateOurstaffsectionDto) {
    return this.ourstaffsectionService.update(id, updateOurstaffsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourstaffsectionService.remove(id);
  }
}
