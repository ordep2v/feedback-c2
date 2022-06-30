import { Request, Response } from 'express';
import FeedbacksModel from '../models/FeedbacksModel';
import FeedbacksService from '../services/FeedbacksService';

export default class FeedbacksController {
  private feedbacksService: FeedbacksService;

  constructor() {
    this.feedbacksService = new FeedbacksService();
  }

  public index = async (req: Request, res: Response) => {
    const feedbacks = await this.feedbacksService.index();
    res.send(feedbacks).json();
  };

  public create = async (req: Request, res: Response) => {
    const feedback = req.body as FeedbacksModel;

    const newFeedback = await this.feedbacksService.create(feedback);
    res.send(newFeedback).json();
  };

  public update = async (req: Request, res:Response) => {
    const feedback = req.body as FeedbacksModel;
    const { id } = req.params;

    res.send(this.feedbacksService.update(feedback, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.feedbacksService.delete(Number(id)));
  };
}
