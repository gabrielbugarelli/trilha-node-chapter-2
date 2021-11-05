import {Request, Response, Router} from 'express';
import { CategoriesRepository } from '../modules/cars/repository/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', async (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
})

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  const listAllCategory = categoriesRepository.list();
  return response.json(listAllCategory).status(200);
})
