import { CategoriesRepository } from "../repository/CategoriesRepository";
import { ICategoriesRepository } from "../repository/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryServices {

  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({name, description});
  }
}