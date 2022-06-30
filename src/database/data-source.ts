import 'reflect-metadata';
import { DataSource } from 'typeorm';
import FeedbacksModel from '../app/models/FeedbacksModel';
import SectorsModel from '../app/models/SectorsModel';
import PersonsModel from '../app/models/PersonsModel';

export default new DataSource({
  type: 'sqlite',
  database: './src/database/database.db',
  synchronize: true,
  logging: false,
  entities: [
    PersonsModel, SectorsModel, FeedbacksModel,
  ],
  migrations: [],
  subscribers: [],
});
