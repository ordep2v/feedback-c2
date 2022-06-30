import { Router } from 'express';
import SectorsController from '../controllers/SectorsController';

const SectorsRouter = Router();

const sectorsController = new SectorsController();

SectorsRouter.get('/', sectorsController.index);
SectorsRouter.post('/', sectorsController.create);
SectorsRouter.put('/:id', sectorsController.update);
SectorsRouter.delete('/:id', sectorsController.delete);

export default SectorsRouter;
