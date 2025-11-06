import { Test, TestingModule } from '@nestjs/testing';
import { OurstaffsectionController } from './ourstaffsection.controller';
import { OurstaffsectionService } from './ourstaffsection.service';

describe('OurstaffsectionController', () => {
  let controller: OurstaffsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurstaffsectionController],
      providers: [OurstaffsectionService],
    }).compile();

    controller = module.get<OurstaffsectionController>(OurstaffsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
