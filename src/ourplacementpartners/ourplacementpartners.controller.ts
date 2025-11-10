import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurplacementpartnersService } from './ourplacementpartners.service';
import { CreateOurplacementpartnerDto } from './dto/create-ourplacementpartner.dto';
import { UpdateOurplacementpartnerDto } from './dto/update-ourplacementpartner.dto';

@Controller('ourplacementpartners')
export class OurplacementpartnersController {
  constructor(private readonly ourplacementpartnersService: OurplacementpartnersService) {}

  @Post()
  create(@Body() createOurplacementpartnerDto: CreateOurplacementpartnerDto) {
    return this.ourplacementpartnersService.create(createOurplacementpartnerDto);
  }

  @Get()
  findAll() {
    return this.ourplacementpartnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourplacementpartnersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurplacementpartnerDto: UpdateOurplacementpartnerDto) {
    return this.ourplacementpartnersService.update(id, updateOurplacementpartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourplacementpartnersService.remove(id);
  }
}
