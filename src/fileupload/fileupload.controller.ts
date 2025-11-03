import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) {}

  @Post()
  @FormDataRequest()
  @ApiConsumes('multipart/form-data')

  create(@Body() createFileuploadDto: CreateFileuploadDto) {
    console.log(createFileuploadDto,"here")
    return this.fileuploadService.create(createFileuploadDto);
  }

  @Get()
  findAll() {
    return this.fileuploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileuploadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileuploadDto: UpdateFileuploadDto) {
    return this.fileuploadService.update(id, updateFileuploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileuploadService.remove(id);
  }
}
