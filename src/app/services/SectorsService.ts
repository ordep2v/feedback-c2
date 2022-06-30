import { Repository } from 'typeorm';
import SectorsModel from '../models/SectorsModel';
import AppDataSource from '../../database/data-source';

export default class SectorsService {
  private sectorsRepository: Repository<SectorsModel>;

  constructor() {
    this.sectorsRepository = AppDataSource.getRepository(SectorsModel);
  }

  public index = async () => {
    const sectors = await this.sectorsRepository.find();
    return sectors;
  };

  public create = async (empresa: SectorsModel) => {
    const sectorCreated = await this.sectorsRepository.insert(empresa);
    return sectorCreated;
  };

  public update = async (empresa: SectorsModel, id: number) => {
    const sectorUpdated = await this.sectorsRepository.update(id, empresa);
    return sectorUpdated;
  };

  public delete = async (id: number) => {
    const sectorRemoved = await this.sectorsRepository.delete(id);
    return sectorRemoved;
  };
}
