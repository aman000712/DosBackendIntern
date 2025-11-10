import { Test, TestingModule } from '@nestjs/testing';
import { OurplacementpartnersController } from './ourplacementpartners.controller';
import { OurplacementpartnersService } from './ourplacementpartners.service';

describe('OurplacementpartnersController', () => {
  let controller: OurplacementpartnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurplacementpartnersController],
      providers: [OurplacementpartnersService],
    }).compile();

    controller = module.get<OurplacementpartnersController>(OurplacementpartnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
