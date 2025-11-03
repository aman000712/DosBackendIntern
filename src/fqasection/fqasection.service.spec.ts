import { Test, TestingModule } from '@nestjs/testing';
import { FqasectionService } from './fqasection.service';

describe('FqasectionService', () => {
  let service: FqasectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FqasectionService],
    }).compile();

    service = module.get<FqasectionService>(FqasectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
