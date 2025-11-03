import { ApiProperty } from '@nestjs/swagger';
import { FileSystemStoredFile, HasMimeType, IsFile } from 'nestjs-form-data';

export class CreateFileuploadDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  @HasMimeType(['image/jpeg', 'image/png', 'image/svg+xml'])
  @IsFile()
  images: FileSystemStoredFile;
}
