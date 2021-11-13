import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list();

    if(!categories) {
      throw Error("Not a categories");
    }

    return categories;
  }

}