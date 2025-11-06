import { Test, TestingModule } from '@nestjs/testing';
import { AddblogService } from './addblog.service';

describe('AddblogService', () => {
  let service: AddblogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddblogService],
    }).compile();

    service = module.get<AddblogService>(AddblogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
