import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Addblog {



    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column('longtext')
    description: string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid: Fileupload

    @Column()
    category: string




}
