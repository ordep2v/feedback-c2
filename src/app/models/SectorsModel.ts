import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()

export default class SectorsModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      name: string;

    @Column()
      descriptionSector: string;
}
