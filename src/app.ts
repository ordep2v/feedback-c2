import { debug } from 'debug';

import express, {
  Express, Request, Response, NextFunction,
} from 'express';

import { config } from 'dotenv';
import PersonsRouter from './app/routes/PersonsRoutes';
import initializeDB from './database';
import SectorsRouter from './app/routes/SectorsRoutes';
import FeedbacksRouter from './app/routes/FeedbacksRoutes';

const log = debug('feedback-api:app');

config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});

class App {
  public express: Express;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  public async database() {
    await initializeDB();
  }

  public middlewares() {
    this.express.use(express.json());
    this.express.use((req:Request, res: Response, next:NextFunction) => {
      log(req.query, `request em: ${new Date().toISOString()}`);
      next();
    });
  }

  public routes() {
    this.express.use('/persons', PersonsRouter);
    this.express.use('/feedbacks', FeedbacksRouter);
    this.express.use('/sectors', SectorsRouter);
  }
}

export default new App().express;
