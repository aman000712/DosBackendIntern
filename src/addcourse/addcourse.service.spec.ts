import { Test, TestingModule } from '@nestjs/testing';
import { AddcourseService } from './addcourse.service';

describe('AddcourseService', () => {
  let service: AddcourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddcourseService],
    }).compile();

    service = module.get<AddcourseService>(AddcourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
