import { Test, TestingModule } from '@nestjs/testing';
import { AddblogController } from './addblog.controller';
import { AddblogService } from './addblog.service';

describe('AddblogController', () => {
  let controller: AddblogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddblogController],
      providers: [AddblogService],
    }).compile();

    controller = module.get<AddblogController>(AddblogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
