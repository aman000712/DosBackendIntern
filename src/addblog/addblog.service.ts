import { Injectable } from '@nestjs/common';
import { CreateAddblogDto } from './dto/create-addblog.dto';
import { UpdateAddblogDto } from './dto/update-addblog.dto';

@Injectable()
export class AddblogService {
  create(createAddblogDto: CreateAddblogDto) {
    return 'This action adds a new addblog';
  }

  findAll() {
    return `This action returns all addblog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addblog`;
  }

  update(id: number, updateAddblogDto: UpdateAddblogDto) {
    return `This action updates a #${id} addblog`;
  }

  remove(id: number) {
    return `This action removes a #${id} addblog`;
  }
}
