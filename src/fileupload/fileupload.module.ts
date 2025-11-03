import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ConfigModule } from '@nestjs/config';
import { Fileupload } from './entities/fileupload.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fileupload]),
    NestjsFormDataModule,
    ConfigModule.forRoot(),
  ],

  controllers: [FileuploadController],
  providers: [FileuploadService],
})
export class FileuploadModule {}
