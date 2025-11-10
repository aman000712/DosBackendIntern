import { Test, TestingModule } from '@nestjs/testing';
import { AddcourseController } from './addcourse.controller';
import { AddcourseService } from './addcourse.service';

describe('AddcourseController', () => {
  let controller: AddcourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddcourseController],
      providers: [AddcourseService],
    }).compile();

    controller = module.get<AddcourseController>(AddcourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
