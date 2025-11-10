import { PartialType } from '@nestjs/swagger';
import { CreateSucessstoryDto } from './create-sucessstory.dto';

export class UpdateSucessstoryDto extends PartialType(CreateSucessstoryDto) {}
