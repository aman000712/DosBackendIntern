import { Test, TestingModule } from '@nestjs/testing';
import { OurstaffsectionService } from './ourstaffsection.service';

describe('OurstaffsectionService', () => {
  let service: OurstaffsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurstaffsectionService],
    }).compile();

    service = module.get<OurstaffsectionService>(OurstaffsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
