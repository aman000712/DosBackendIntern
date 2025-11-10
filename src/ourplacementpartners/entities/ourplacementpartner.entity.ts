import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Ourplacementpartner {



    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    title: string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload





}
