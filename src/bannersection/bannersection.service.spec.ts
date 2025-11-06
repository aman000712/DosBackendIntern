import { Test, TestingModule } from '@nestjs/testing';
import { BannersectionService } from './bannersection.service';

describe('BannersectionService', () => {
  let service: BannersectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannersectionService],
    }).compile();

    service = module.get<BannersectionService>(BannersectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
