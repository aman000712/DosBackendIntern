import { Test, TestingModule } from '@nestjs/testing';
import { SucessstoriesController } from './sucessstories.controller';
import { SucessstoriesService } from './sucessstories.service';

describe('SucessstoriesController', () => {
  let controller: SucessstoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SucessstoriesController],
      providers: [SucessstoriesService],
    }).compile();

    controller = module.get<SucessstoriesController>(SucessstoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
