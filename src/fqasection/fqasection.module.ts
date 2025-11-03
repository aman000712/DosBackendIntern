import { Module } from '@nestjs/common';
import { FqasectionService } from './fqasection.service';
import { FqasectionController } from './fqasection.controller';
import { Fqasection } from './entities/fqasection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [
    TypeOrmModule.forFeature([Fqasection]),
  ],



  controllers: [FqasectionController],
  providers: [FqasectionService],
})
export class FqasectionModule {}
