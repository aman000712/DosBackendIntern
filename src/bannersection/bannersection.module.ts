import { Module } from '@nestjs/common';
import { BannersectionService } from './bannersection.service';
import { BannersectionController } from './bannersection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bannersection } from './entities/bannersection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({



  imports: [

    TypeOrmModule.forFeature([
      Bannersection,
      Fileupload
    ]),


  ],



  controllers: [BannersectionController],
  providers: [BannersectionService],
})
export class BannersectionModule {}
