import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
export class ImportCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;
  
  constructor(
    @inject("CategoriesRepository")
    categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      const categories: IImportCategory[] = [];
  
      stream.pipe(parseFile);
  
      parseFile.on("data", async (line) => {
        const [name, description] = line;
  
        categories.push({
          name,
          description
        })
      }).on("end", () => {
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on("error", (error) => {
        reject(error);
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const {name, description} = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if(!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        })
      }
    })
  }
}