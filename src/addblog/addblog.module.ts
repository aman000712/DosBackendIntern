import { Module } from '@nestjs/common';
import { AddblogService } from './addblog.service';
import { AddblogController } from './addblog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Addblog } from './entities/addblog.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([

      Addblog,
      Fileupload


    ]),
  ],

  controllers: [AddblogController],
  providers: [AddblogService],
})
export class AddblogModule {}
