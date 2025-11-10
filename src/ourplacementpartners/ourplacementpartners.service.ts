import { Injectable } from '@nestjs/common';
import { CreateOurplacementpartnerDto } from './dto/create-ourplacementpartner.dto';
import { UpdateOurplacementpartnerDto } from './dto/update-ourplacementpartner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourplacementpartner } from './entities/ourplacementpartner.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurplacementpartnersService {
  constructor(
    @InjectRepository(Ourplacementpartner)
    private readonly ourplacementpartnerRepository: Repository<Ourplacementpartner>,
  ) {}

  async create(createOurplacementpartnerDto: CreateOurplacementpartnerDto) {
    if (createOurplacementpartnerDto.imageid) {
      const imag = await this.ourplacementpartnerRepository.manager.findOne(
        Fileupload,
        {
          where: { id: createOurplacementpartnerDto.imageid },
        },
      );
      if (!imag) {
        throw new Error('File not found');
      }
      createOurplacementpartnerDto.imageid = imag;
    }

    const ourplacementpartner = this.ourplacementpartnerRepository.create(
      createOurplacementpartnerDto,
    );

    return await this.ourplacementpartnerRepository.save(ourplacementpartner);
  }

  async findAll() {
    return await this.ourplacementpartnerRepository.find({
      relations: ['imageid'],
    });
  }

  async findOne(id: string) {
    return await this.ourplacementpartnerRepository.findOne({
      where: { id: id },
      relations: ['imageid'],
    });
  }

  async update(
    id: string,
    updateOurplacementpartnerDto: UpdateOurplacementpartnerDto,
  ) {
    if (updateOurplacementpartnerDto.imageid) {
      const imag = await this.ourplacementpartnerRepository.manager.findOne(
        Fileupload,
        {
          where: { id: updateOurplacementpartnerDto.imageid },
        },
      );
      if (!imag) {
        throw new Error('File not found');
      }
      updateOurplacementpartnerDto.imageid = imag;
    }

    const ourplacementpartner =
      await this.ourplacementpartnerRepository.findOne({
        where: { id: id },
      });

    if (!ourplacementpartner) {
      throw new Error('ourplacementpartner not found');
    }

    Object.assign(ourplacementpartner, updateOurplacementpartnerDto);

    return await this.ourplacementpartnerRepository.save(ourplacementpartner);
  }

  async remove(id: string) {
    return await this.ourplacementpartnerRepository.delete(id);
  }
}
