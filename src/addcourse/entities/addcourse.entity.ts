import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Addcourse {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    coursetittle: string

    @OneToOne(() => Fileupload)
    @JoinColumn()
    imageid: Fileupload

    @Column('longtext')
    coursedescription: string

    @Column()
    syllabustittle: string

    @Column('longtext')
    syllabusdescription: string

    @Column()
    catogory: string







}
