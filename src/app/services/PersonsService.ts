import { Repository } from 'typeorm';
import PersonsModel from '../models/PersonsModel';
import AppDataSource from '../../database/data-source';

export default class PersonsService {
  private personsRepository: Repository<PersonsModel>;

  constructor() {
    this.personsRepository = AppDataSource.getRepository(PersonsModel);
  }

  public index = async () => {
    const persons = await this.personsRepository.find();
    return persons;
  };

  public create = async (person: PersonsModel) => {
    const personCreated = await this.personsRepository.insert(person);
    return personCreated;
  };

  public update = async (person: PersonsModel, id: number) => {
    const personUpdated = await this.personsRepository.update(id, person);
    return personUpdated;
  };

  public delete = async (id: number) => {
    const personRemoved = await this.personsRepository.delete(id);
    return personRemoved;
  };
}
