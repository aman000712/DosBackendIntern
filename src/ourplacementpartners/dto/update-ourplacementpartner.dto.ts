import { PartialType } from '@nestjs/swagger';
import { CreateOurplacementpartnerDto } from './create-ourplacementpartner.dto';

export class UpdateOurplacementpartnerDto extends PartialType(CreateOurplacementpartnerDto) {}
