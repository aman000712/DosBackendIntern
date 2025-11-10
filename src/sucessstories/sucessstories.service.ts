import { Injectable } from '@nestjs/common';
import { CreateSucessstoryDto } from './dto/create-sucessstory.dto';
import { UpdateSucessstoryDto } from './dto/update-sucessstory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sucessstory } from './entities/sucessstory.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class SucessstoriesService {
  constructor(
    @InjectRepository(Sucessstory)
    private readonly sucessstoryRepository: Repository<Sucessstory>,
  ) {}

  async create(createSucessstoryDto: CreateSucessstoryDto) {
    if (createSucessstoryDto.imageid) {
      const find = await this.sucessstoryRepository.manager.findOne(
        Fileupload,
        {
          where: { id: createSucessstoryDto.imageid },
        },
      );
      if (!find) {
        throw new Error('File not found');
      }
      createSucessstoryDto.imageid = find;
    }

    const sucessstory = this.sucessstoryRepository.create(createSucessstoryDto);

    return await this.sucessstoryRepository.save(sucessstory);
  }

  async findAll() {
    return this.sucessstoryRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return this.sucessstoryRepository.findOne({
      where: { id: id },
      relations: ['imageid'],
    });
  }

  async update(id: string, updateSucessstoryDto: UpdateSucessstoryDto) {
    if (updateSucessstoryDto.imageid) {
      const find = await this.sucessstoryRepository.manager.findOne(
        Fileupload,
        {
          where: { id: updateSucessstoryDto.imageid },
        },
      );
      if (!find) {
        throw new Error('File not found');
      }
      updateSucessstoryDto.imageid = find;
    }

    const sucessstory = await this.sucessstoryRepository.findOne({
      where: { id: id },
    });

    if (!sucessstory) {
      throw new Error('sucessstory not found');
    }

    Object.assign(sucessstory, updateSucessstoryDto);

    return await this.sucessstoryRepository.save(sucessstory);
  }

  async remove(id: string) {
    return await this.sucessstoryRepository.delete(id);
  }
}
