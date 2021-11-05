import {Request, Response, Router} from 'express';
import { PostgresCategoriesRepository } from '../repository/PostgresCategoriesRepository';
import { CreateCategoryServices } from '../services/CreateCategoryService';

export const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository(); 

categoriesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, description } = await request.body;

  const createCategoryServices = new CreateCategoryServices(categoriesRepository);

  createCategoryServices.execute({name, description});

  return response.status(201).end();
})

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  const listAllCategory = categoriesRepository.list();
  return response.json(listAllCategory).status(200);
})
