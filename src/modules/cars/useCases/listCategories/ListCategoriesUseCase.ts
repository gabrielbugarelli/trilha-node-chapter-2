import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repository/ICategoriesRepository";

export class ListCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    if(!categories) {
      throw Error("Not a categories");
    }

    return categories;
  }

}