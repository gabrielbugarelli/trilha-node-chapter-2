import {Request, Response, Router} from 'express';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

export const categoriesRoutes = Router();

categoriesRoutes.post('/', async (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
})

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  return listCategoryController.handle(request, response);
})
