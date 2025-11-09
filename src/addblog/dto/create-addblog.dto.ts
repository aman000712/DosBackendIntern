import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreateAddblogDto {


    @ApiProperty()
    title: string;


    @ApiProperty()
    description: string;


    @ApiProperty()
    imageid: any

    @ApiProperty()
    category: string





}
