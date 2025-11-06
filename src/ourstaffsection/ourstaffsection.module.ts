import { Module } from '@nestjs/common';
import { OurstaffsectionService } from './ourstaffsection.service';
import { OurstaffsectionController } from './ourstaffsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ourstaffsection } from './entities/ourstaffsection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [



    TypeOrmModule.forFeature([
      Ourstaffsection,
      Fileupload
    ]),




  ],



  controllers: [OurstaffsectionController],
  providers: [OurstaffsectionService],
})
export class OurstaffsectionModule {}
