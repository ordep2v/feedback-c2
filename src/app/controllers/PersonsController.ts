import { Request, Response } from 'express';
import PersonModel from '../models/PersonsModel';
import PersonsService from '../services/PersonsService';

export default class PersonsController {
  private personsService: PersonsService;

  constructor() {
    this.personsService = new PersonsService();
  }

  public index = async (req: Request, res: Response) => {
    const persons = await this.personsService.index();
    res.send(persons).json();
  };

  public create = async (req: Request, res: Response) => {
    const person = req.body as PersonModel;

    const newPerson = await this.personsService.create(person);
    res.send(newPerson).json();
  };

  public update = async (req: Request, res:Response) => {
    const person = req.body as PersonModel;
    const { id } = req.params;

    res.send(this.personsService.update(person, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.personsService.delete(Number(id)));
  };
}
