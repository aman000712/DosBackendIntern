import { Injectable } from '@nestjs/common';
import { CreateBannersectionDto } from './dto/create-bannersection.dto';
import { UpdateBannersectionDto } from './dto/update-bannersection.dto';

@Injectable()
export class BannersectionService {
  create(createBannersectionDto: CreateBannersectionDto) {
    return 'This action adds a new bannersection';
  }

  findAll() {
    return `This action returns all bannersection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bannersection`;
  }

  update(id: number, updateBannersectionDto: UpdateBannersectionDto) {
    return `This action updates a #${id} bannersection`;
  }

  remove(id: number) {
    return `This action removes a #${id} bannersection`;
  }
}
