import { PartialType } from '@nestjs/swagger';
import { CreateBannersectionDto } from './create-bannersection.dto';

export class UpdateBannersectionDto extends PartialType(CreateBannersectionDto) {}
