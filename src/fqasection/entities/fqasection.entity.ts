import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fqasection {


    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    title: string

    @Column('longtext')
    description: string

}
