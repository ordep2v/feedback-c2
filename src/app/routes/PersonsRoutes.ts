import { Router } from 'express';
import PersonsController from '../controllers/PersonsController';

const PersonsRouter = Router();

const personsController = new PersonsController();

PersonsRouter.get('/', personsController.index);
PersonsRouter.post('/', personsController.create);
PersonsRouter.put('/:id', personsController.update);
PersonsRouter.delete('/:id', personsController.delete);

export default PersonsRouter;
