import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Bannersection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  page: string;

  @OneToOne(() => Fileupload, { eager: true })
  @JoinColumn()
  imageid: Fileupload;

  @Column()
  title: string;
}
