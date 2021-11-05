import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repository/ICategoriesRepository";

export class ListCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Category[] | null {
    const categories = this.categoriesRepository.list();

    return categories;
  }

}