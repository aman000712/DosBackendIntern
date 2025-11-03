import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fileupload {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    imageUrl: string



}
