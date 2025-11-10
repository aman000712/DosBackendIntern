import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Sucessstory {



    @PrimaryGeneratedColumn('uuid')
    id: string


    @OneToOne(() => Fileupload)
    @JoinColumn()
    imageid: Fileupload


    @Column()
    name: string

    @Column()
    position: string

    @Column()
    currentworkingcity: string
}
