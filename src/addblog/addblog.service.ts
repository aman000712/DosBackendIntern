import { Injectable } from '@nestjs/common';
import { CreateAddblogDto } from './dto/create-addblog.dto';
import { UpdateAddblogDto } from './dto/update-addblog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Addblog } from './entities/addblog.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AddblogService {
  constructor(
    @InjectRepository(Addblog)
    private readonly addblogRepository: Repository<Addblog>,
  ) {}

  async create(createAddblogDto: CreateAddblogDto) {
    if (createAddblogDto.imageid) {
      const find = await this.addblogRepository.manager.findOne(Fileupload, {
        where: {
          id: createAddblogDto.imageid,
        },
      });

      if (!find) {
        throw new Error('File not found');
      }

      createAddblogDto.imageid = find;
    }

    const addblog = this.addblogRepository.create(createAddblogDto);

    return await this.addblogRepository.save(addblog);
  }

  async findAll() {
    return await this.addblogRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return await this.addblogRepository.findOne({
      relations: ['imageid'],
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateAddblogDto: UpdateAddblogDto) {
    if (updateAddblogDto.imageid) {
      const find = this.addblogRepository.manager.findOne(Fileupload, {
        where: {
          id: updateAddblogDto.imageid,
        },
      });

      if (!find) {
        throw new Error('File not found');
      }

      updateAddblogDto.imageid = find;
    }

    const addblog = await this.addblogRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!addblog) {
      throw new Error('addblog not found');
    }

    Object.assign(addblog, updateAddblogDto);

    return await this.addblogRepository.save(addblog);
  }

  remove(id: string) {
    return this.addblogRepository.delete(id);
  }
}
