import { Injectable } from '@nestjs/common';
import { CreateFqasectionDto } from './dto/create-fqasection.dto';
import { UpdateFqasectionDto } from './dto/update-fqasection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fqasection } from './entities/fqasection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FqasectionService {
  constructor(
    @InjectRepository(Fqasection)
    private readonly fqasectionRepository: Repository<Fqasection>,
  ) {}

  async create(createFqasectionDto: CreateFqasectionDto) {
    const fqasection = this.fqasectionRepository.create(createFqasectionDto);
    return this.fqasectionRepository.save(fqasection);
  }

  async findAll() {
    return this.fqasectionRepository.find();
  }

  findOne(id: string) {
    return this.fqasectionRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateFqasectionDto: UpdateFqasectionDto) {

    const fqasection = await this.fqasectionRepository.findOne({
      where: { id: id },
    })
    if(!fqasection){
      throw new Error('FQA section not found')
    }
    Object.assign(fqasection, updateFqasectionDto);
    return this.fqasectionRepository.save(fqasection);
  }

  remove(id: string) {
    return this.fqasectionRepository.delete(id);
  }
}
