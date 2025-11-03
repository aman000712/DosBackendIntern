import { Test, TestingModule } from '@nestjs/testing';
import { HomesectionService } from './homesection.service';

describe('HomesectionService', () => {
  let service: HomesectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomesectionService],
    }).compile();

    service = module.get<HomesectionService>(HomesectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
