import { Module } from '@nestjs/common';
import { OurplacementpartnersService } from './ourplacementpartners.service';
import { OurplacementpartnersController } from './ourplacementpartners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ourplacementpartner } from './entities/ourplacementpartner.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({



  imports: [


    TypeOrmModule.forFeature([
      Ourplacementpartner,
      Fileupload
    ])



  ],


  controllers: [OurplacementpartnersController],
  providers: [OurplacementpartnersService],
})
export class OurplacementpartnersModule {}
