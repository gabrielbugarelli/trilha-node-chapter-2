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

  async execute({name, description}: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error('Specification already exist!');
    }

    await this.specificationRepository.create({name, description})
  }
}