import { ApiProperty } from "@nestjs/swagger";

export class CreateFqasectionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
