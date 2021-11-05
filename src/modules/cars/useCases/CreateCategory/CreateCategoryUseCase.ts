import { CategoriesRepository } from "../../repository/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {

  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw Error("Category already exists!");
    }

    this.categoriesRepository.create({name, description});
  }
} 