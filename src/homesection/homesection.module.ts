import { Module } from '@nestjs/common';
import { HomesectionService } from './homesection.service';
import { HomesectionController } from './homesection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Homesection } from './entities/homesection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Homesection,
      Fileupload

    ]),
  ],




  controllers: [HomesectionController],
  providers: [HomesectionService],
})
export class HomesectionModule {}
