import { Injectable } from '@nestjs/common';
import { CreateOurstaffsectionDto } from './dto/create-ourstaffsection.dto';
import { UpdateOurstaffsectionDto } from './dto/update-ourstaffsection.dto';
import { Ourstaffsection } from './entities/ourstaffsection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurstaffsectionService {
  constructor(
    @InjectRepository(Ourstaffsection)
    private readonly ourstaffsectionRepository: Repository<Ourstaffsection>,
  ) {}

  async create(createOurstaffsectionDto: CreateOurstaffsectionDto) {
    if (createOurstaffsectionDto.imageid) {
      const findimage = await this.ourstaffsectionRepository.manager.findOne(
        Fileupload,
        {
          where: { id: createOurstaffsectionDto.imageid },
        },
      );
      if (!findimage) {
        throw new Error('File not found');
      }
      createOurstaffsectionDto.imageid = findimage;
    }

    const ourstaffsection = this.ourstaffsectionRepository.create(
      createOurstaffsectionDto,
    );

    return await this.ourstaffsectionRepository.save(ourstaffsection);
  }

  async findAll() {
    return await this.ourstaffsectionRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return await this.ourstaffsectionRepository.findOne({
      where: { id: id },
      relations: ['imageid'],
    });
  }

  async update(id: string, updateOurstaffsectionDto: UpdateOurstaffsectionDto) {
    if (updateOurstaffsectionDto.imageid) {
      const findimage = await this.ourstaffsectionRepository.manager.findOne(
        Fileupload,
        {
          where: { id: updateOurstaffsectionDto.imageid },
        },
      );
      if (!findimage) {
        throw new Error('File not found');
      }
      updateOurstaffsectionDto.imageid = findimage;
    }

    const ourstaffsection = await this.ourstaffsectionRepository.findOne({
      where: { id: id },
    });
    if (!ourstaffsection) {
      throw new Error('ourstaffsection not found');
    }
    Object.assign(ourstaffsection, updateOurstaffsectionDto);
    return await this.ourstaffsectionRepository.save(ourstaffsection);
  }

  remove(id: string) {
    return this.ourstaffsectionRepository.delete(id);
  }
}
