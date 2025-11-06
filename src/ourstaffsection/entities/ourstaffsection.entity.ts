import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ourstaffsection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Fileupload)
  @JoinColumn()
  imageid: Fileupload;

  @Column()
  name: string;

  @Column()
  job: string;

  @Column()
  email: string;

  @Column('longtext')
  linkdin: string;
}
