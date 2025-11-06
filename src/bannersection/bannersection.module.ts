import { Module } from '@nestjs/common';
import { BannersectionService } from './bannersection.service';
import { BannersectionController } from './bannersection.controller';

@Module({
  controllers: [BannersectionController],
  providers: [BannersectionService],
})
export class BannersectionModule {}
