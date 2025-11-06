import { PartialType } from '@nestjs/swagger';
import { CreateAddblogDto } from './create-addblog.dto';

export class UpdateAddblogDto extends PartialType(CreateAddblogDto) {}
