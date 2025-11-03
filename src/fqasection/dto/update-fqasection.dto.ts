import { PartialType } from '@nestjs/mapped-types';
import { CreateFqasectionDto } from './create-fqasection.dto';

export class UpdateFqasectionDto extends PartialType(CreateFqasectionDto) {}
