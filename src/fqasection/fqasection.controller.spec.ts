import { Test, TestingModule } from '@nestjs/testing';
import { FqasectionController } from './fqasection.controller';
import { FqasectionService } from './fqasection.service';

describe('FqasectionController', () => {
  let controller: FqasectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FqasectionController],
      providers: [FqasectionService],
    }).compile();

    controller = module.get<FqasectionController>(FqasectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
