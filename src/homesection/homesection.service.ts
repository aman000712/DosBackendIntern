import { Injectable } from '@nestjs/common';
import { CreateHomesectionDto } from './dto/create-homesection.dto';
import { UpdateHomesectionDto } from './dto/update-homesection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Homesection } from './entities/homesection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class HomesectionService {
  constructor(
    @InjectRepository(Homesection)
    private readonly homesectionRepository: Repository<Homesection>,
  ) {}

  async create(createHomesectionDto: CreateHomesectionDto) {
    const existingHomeSection = await this.homesectionRepository.findOne({});
    if (existingHomeSection) {
      throw new Error(
        'Home section already exists. Only one entry is allowed.',
      );
    }

    if (createHomesectionDto.imageid) {
      const homesectionimage = await this.homesectionRepository.manager.findOne(
        Fileupload,
        {
          where: { id: createHomesectionDto.imageid },
        },
      );
      if (!homesectionimage) {
        throw new Error('File not found');
      }
      createHomesectionDto.imageid = homesectionimage;
    }

    const herosection = this.homesectionRepository.create(createHomesectionDto);
    return this.homesectionRepository.save(herosection);
  }

  async findAll() {
    return this.homesectionRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return this.homesectionRepository.findOne({
      where: { id: id },
      relations: ['imageid'],
    });
  }

  async update(id: string, updateHomesectionDto: UpdateHomesectionDto) {
    if (updateHomesectionDto.imageid) {
      const homesectionimage = await this.homesectionRepository.manager.findOne(
        Fileupload,
        {
          where: { id: updateHomesectionDto.imageid },
        },
      );
      if (!homesectionimage) {
        throw new Error('File not found');
      }
      updateHomesectionDto.imageid = homesectionimage;
    }

    const homesection = await this.homesectionRepository.findOne({
      where: { id: id },
    });
    if (!homesection) {
      throw new Error('Homesection not found');
    }
    Object.assign(homesection, updateHomesectionDto);
    return this.homesectionRepository.save(homesection);
  }

  remove(id: string) {
    return this.homesectionRepository.delete(id);
  }
}
