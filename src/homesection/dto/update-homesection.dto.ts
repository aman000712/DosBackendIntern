import { PartialType } from '@nestjs/swagger';
import { CreateHomesectionDto } from './create-homesection.dto';

export class UpdateHomesectionDto extends PartialType(CreateHomesectionDto) {}
