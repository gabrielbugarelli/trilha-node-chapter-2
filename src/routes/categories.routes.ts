import {Request, Response, Router} from 'express';

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', async (request: Request, response: Response) => {
  const { name, description } = await request.body;

  categories.push({
    name,
    description
  });

  return response.status(201).send();
})
