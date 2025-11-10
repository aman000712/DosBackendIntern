import { Module } from '@nestjs/common';
import { AddcourseService } from './addcourse.service';
import { AddcourseController } from './addcourse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Addcourse } from './entities/addcourse.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({



  imports: [


    TypeOrmModule.forFeature([
      Addcourse,
      Fileupload,

    ]),


  ],










  controllers: [AddcourseController],
  providers: [AddcourseService],
})
export class AddcourseModule {}
