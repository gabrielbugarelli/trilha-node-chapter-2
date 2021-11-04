import {Request, Response, Router} from 'express';
import { CategoryRepository } from '../repository/CategoriesRepository';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository(); 

categoriesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, description } = await request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if(categoryAlreadyExists) {
    return response.status(400).json({error: 'Category already exists!'});
  }

  categoriesRepository.create({name, description});

  return response.status(201).end();
})

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  const listAllCategory = categoriesRepository.list();
  return response.json(listAllCategory).status(200);
})
