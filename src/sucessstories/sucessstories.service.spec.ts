import { Test, TestingModule } from '@nestjs/testing';
import { SucessstoriesService } from './sucessstories.service';

describe('SucessstoriesService', () => {
  let service: SucessstoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SucessstoriesService],
    }).compile();

    service = module.get<SucessstoriesService>(SucessstoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
