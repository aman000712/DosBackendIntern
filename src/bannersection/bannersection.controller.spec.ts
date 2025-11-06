import { Test, TestingModule } from '@nestjs/testing';
import { BannersectionController } from './bannersection.controller';
import { BannersectionService } from './bannersection.service';

describe('BannersectionController', () => {
  let controller: BannersectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannersectionController],
      providers: [BannersectionService],
    }).compile();

    controller = module.get<BannersectionController>(BannersectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
