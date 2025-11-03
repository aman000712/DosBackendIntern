import { Test, TestingModule } from '@nestjs/testing';
import { HomesectionController } from './homesection.controller';
import { HomesectionService } from './homesection.service';

describe('HomesectionController', () => {
  let controller: HomesectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomesectionController],
      providers: [HomesectionService],
    }).compile();

    controller = module.get<HomesectionController>(HomesectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
