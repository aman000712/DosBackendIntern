import { PartialType } from '@nestjs/swagger';
import { CreateAddcourseDto } from './create-addcourse.dto';

export class UpdateAddcourseDto extends PartialType(CreateAddcourseDto) {}
