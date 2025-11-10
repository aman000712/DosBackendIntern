import { Injectable } from '@nestjs/common';
import { CreateAddcourseDto } from './dto/create-addcourse.dto';
import { UpdateAddcourseDto } from './dto/update-addcourse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Addcourse } from './entities/addcourse.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AddcourseService {
  constructor(
    @InjectRepository(Addcourse)
    private readonly addcourseRepository: Repository<Addcourse>,
  ) {}

  async create(createAddcourseDto: CreateAddcourseDto) {
    if (createAddcourseDto.imageid) {
      const imag = await this.addcourseRepository.manager.findOne(Fileupload, {
        where: { id: createAddcourseDto.imageid },
      });
      if (!imag) {
        throw new Error('File not found');
      }
      createAddcourseDto.imageid = imag;
    }

    const addcourse = this.addcourseRepository.create(createAddcourseDto);

    return await this.addcourseRepository.save(addcourse);
  }

  async findAll() {
    return await this.addcourseRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return await this.addcourseRepository.findOne({
      relations: ['imageid'],
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateAddcourseDto: UpdateAddcourseDto) {
    if (updateAddcourseDto.imageid) {
      const imag = await this.addcourseRepository.manager.findOne(Fileupload, {
        where: { id: updateAddcourseDto.imageid },
      });
      if (!imag) {
        throw new Error('File not found');
      }
      updateAddcourseDto.imageid = imag;
    }

    const addcourse = await this.addcourseRepository.findOne({
      where: { id: id },
    });

    if (!addcourse) {
      throw new Error('addcourse not found');
    }

    Object.assign(addcourse, updateAddcourseDto);

    return await this.addcourseRepository.save(addcourse);
  }

  async remove(id: string) {
    return await this.addcourseRepository.delete(id);
  }
}
