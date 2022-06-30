import { Repository } from 'typeorm';
import FeedbackModel from '../models/FeedbacksModel';
import AppDataSource from '../../database/data-source';

export default class FeedbacksService {
  private feedbackRepository: Repository<FeedbackModel>;

  constructor() {
    this.feedbackRepository = AppDataSource.getRepository(FeedbackModel);
  }

  public index = async () => {
    const feedbacks = await this.feedbackRepository.find();
    return feedbacks;
  };

  public create = async (feedback: FeedbackModel) => {
    const feedbackCreated = await this.feedbackRepository.insert(feedback);
    return feedbackCreated;
  };

  public update = async (feedback: FeedbackModel, id: number) => {
    const feedbackUpdated = await this.feedbackRepository.update(id, feedback);
    return feedbackUpdated;
  };

  public delete = async (id: number) => {
    const feedbackRemoved = await this.feedbackRepository.delete(id);
    return feedbackRemoved;
  };
}
