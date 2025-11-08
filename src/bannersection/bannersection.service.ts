import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannersectionDto } from './dto/create-bannersection.dto';
import { UpdateBannersectionDto } from './dto/update-bannersection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bannersection } from './entities/bannersection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class BannersectionService {
  constructor(
    @InjectRepository(Bannersection)
    private readonly bannersectionRepository: Repository<Bannersection>,
  ) {}

  async create(createBannersectionDto: CreateBannersectionDto) {
    createBannersectionDto.page = createBannersectionDto.page
      .trim()
      .toLowerCase();

    const existingSection = await this.bannersectionRepository.findOne({
      where: { page: createBannersectionDto.page },
    });

    if (existingSection) {
      throw new BadRequestException(
        `A section for page '${createBannersectionDto.page}' already exists. Use update instead.`,
      );
    }

    const topherosection = this.bannersectionRepository.create(
      createBannersectionDto,
    );

    if (createBannersectionDto.imageid) {
      const image = await this.bannersectionRepository.manager.findOne(
        Fileupload,
        {
          where: { id: createBannersectionDto.imageid },
        },
      );
      if (!image) {
        throw new BadRequestException('image not found');
      }
      topherosection.imageid = image;
    }

    return this.bannersectionRepository.save(topherosection);
  }

  async findAll(page?: string) {
    const whereCondition = page ? { page: page.trim().toLowerCase() } : {};
    return this.bannersectionRepository.find({
      where: whereCondition,
      relations: ['imageid'],
    });
  }

  findOne(id: string) {
    return this.bannersectionRepository.findOne({
      where: {
        id: id,
      },
      relations: ['imageid'],
    });
  }



  async update(page: string, updateBannersectionDto: UpdateBannersectionDto) {
    page = page.trim().toLowerCase();
  
    const bannersection = await this.bannersectionRepository.findOne({ 
      where: { page: page } 
    });
  
    if (!bannersection) {
      throw new NotFoundException(`No section found for page '${page}'`);
    }
  
    if (updateBannersectionDto.page && updateBannersectionDto.page !== page) {
      throw new BadRequestException('Page name cannot be changed.');
    }
  
    Object.assign(bannersection, updateBannersectionDto);
  
    return this.bannersectionRepository.save(bannersection);
  }
}
