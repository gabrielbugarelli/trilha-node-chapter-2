import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string,
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  private specificationRepository: ISpecificationsRepository;

  constructor(
    @inject("SpecificationRepository")
    specificationRepository: ISpecificationsRepository) {
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