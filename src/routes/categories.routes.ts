import {Request, Response, Router} from 'express';
import { Category } from '../model/Category';

export const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', async (request: Request, response: Response) => {
  const { name, description } = await request.body;

  const category = new Category();
  
  Object.assign(category, {
    name, 
    description, 
    created_at: new Date()
  });

  categories.push(category);

  return response.status(201).json({category});
})
