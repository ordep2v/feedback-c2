import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()

export default class ColaboradoresModel {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      name: string;

    @Column()
      email: string;

      @Column()
        sector: string;
}
