import { Module } from '@nestjs/common';
import { SucessstoriesService } from './sucessstories.service';
import { SucessstoriesController } from './sucessstories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sucessstory } from './entities/sucessstory.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [


    TypeOrmModule.forFeature([
      Sucessstory,
      Fileupload
    ])


  ],


  controllers: [SucessstoriesController],
  providers: [SucessstoriesService],
})
export class SucessstoriesModule {}
