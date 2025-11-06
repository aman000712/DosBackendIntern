import { PartialType } from '@nestjs/swagger';
import { CreateOurstaffsectionDto } from './create-ourstaffsection.dto';

export class UpdateOurstaffsectionDto extends PartialType(CreateOurstaffsectionDto) {}
