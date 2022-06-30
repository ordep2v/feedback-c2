import { Request, Response } from 'express';
import SectorsModel from '../models/SectorsModel';
import SectorsService from '../services/SectorsService';

export default class SectorsController {
  private sectorsService: SectorsService;

  constructor() {
    this.sectorsService = new SectorsService();
  }

  public index = async (req: Request, res: Response) => {
    const sectors = await this.sectorsService.index();
    res.send(sectors).json();
  };

  public create = async (req: Request, res: Response) => {
    const sectors = req.body as SectorsModel;
    console.log(sectors);
    const newSector = await this.sectorsService.create(sectors);
    res.send(newSector).json();
  };

  public update = async (req: Request, res:Response) => {
    const sectors = req.body.sectors as SectorsModel;
    const { id } = req.params;

    res.send(this.sectorsService.update(sectors, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.sectorsService.delete(Number(id)));
  };
}
