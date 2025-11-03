import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileuploadService {
  constructor(
    @InjectRepository(Fileupload)
    private readonly fileuploadRepository: Repository<Fileupload>,
    private readonly configService: ConfigService,
  ) {}

  async create(createFileuploadDto: CreateFileuploadDto) {
    const filePath = createFileuploadDto.images.path;
    const normalizedPath = filePath.replace(/\\/g, '/');
    const fileName = normalizedPath.split('/').pop() ?? '';

    const baseUrl = this.configService.get<string>('ImageUrl') ?? '';
    const trimmedBaseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

    const Url = `${trimmedBaseUrl}${fileName}`;

    const fileupload = this.fileuploadRepository.create({ imageUrl: Url });
    await this.fileuploadRepository.save(fileupload);
    return { message: 'File uploaded successfully', fileupload };
  }

  async findAll() {
    return this.fileuploadRepository.find();
  }

  findOne(id: string) {
    return this.fileuploadRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateFileuploadDto: UpdateFileuploadDto) {
    const fileupload = await this.fileuploadRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!fileupload) {
      throw new Error('Fileupload not found');
    }

    if (updateFileuploadDto.images) {
      const filePath = updateFileuploadDto.images.path;
      const fileName = filePath.split('\\').pop() || filePath.split('/').pop();
      const baseUrl = this.configService.get<string>('ImageUrl');
      fileupload.imageUrl = `${baseUrl}${fileName}`;
    }

    return this.fileuploadRepository.save(fileupload);
  }

  async remove(id: string) {
    const fileupload = await this.fileuploadRepository.findOne({
      where: { id },
    });

    if (!fileupload) {
      throw new NotFoundException(`File with id '${id}' not found.`);
    }

    await this.fileuploadRepository.delete(id);
    return { message: `File with id '${id}' deleted successfully.` };
  }
}
