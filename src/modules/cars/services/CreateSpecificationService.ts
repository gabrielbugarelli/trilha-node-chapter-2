import { ISpecificationsRepository } from "../repository/ISpecificationsRepository";

interface IRequest {
  name: string,
  description: string
}

export class CreateSpecificationService {
  private specificationRepository: ISpecificationsRepository;

  constructor(specificationRepository: ISpecificationsRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute({name, description}: IRequest) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
      return new Error('Sorry, but this specification already exists!')
    }

    this.specificationRepository.create({name, description})
  }
}