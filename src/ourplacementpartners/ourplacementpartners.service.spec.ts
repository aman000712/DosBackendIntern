import { Test, TestingModule } from '@nestjs/testing';
import { OurplacementpartnersService } from './ourplacementpartners.service';

describe('OurplacementpartnersService', () => {
  let service: OurplacementpartnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurplacementpartnersService],
    }).compile();

    service = module.get<OurplacementpartnersService>(OurplacementpartnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
