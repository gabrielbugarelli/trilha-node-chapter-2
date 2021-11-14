import {Request, Response, Router} from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController';
import importCategoryController from '../modules/cars/useCases/importCategory';
import listCategoryController from '../modules/cars/useCases/listCategories';

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();

//endpoints
categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  return listCategoryController().handle(request, response);
})

categoriesRoutes.post('/import', upload.single("file"), (request: Request, response: Response) => {
  return importCategoryController().handle(request, response);
})
