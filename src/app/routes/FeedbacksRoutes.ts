import { Router } from 'express';
import FeedbacksController from '../controllers/FeedbacksController';

const FeedbacksRouter = Router();

const feedbacksController = new FeedbacksController();

FeedbacksRouter.get('/', feedbacksController.index);
FeedbacksRouter.post('/', feedbacksController.create);
FeedbacksRouter.put('/:id', feedbacksController.update);
FeedbacksRouter.delete('/:id', feedbacksController.delete);

export default FeedbacksRouter;
