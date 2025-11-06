import { Module } from '@nestjs/common';
import { AddblogService } from './addblog.service';
import { AddblogController } from './addblog.controller';

@Module({
  controllers: [AddblogController],
  providers: [AddblogService],
})
export class AddblogModule {}
