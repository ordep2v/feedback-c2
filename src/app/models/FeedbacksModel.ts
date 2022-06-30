import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()

export default class FeedbackModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      title: string;

    @Column()
      level: number;

    @Column()
      text: string;

    @Column()
      evaluated: number;
}
