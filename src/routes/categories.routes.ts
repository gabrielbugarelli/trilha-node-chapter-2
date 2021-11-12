import {Request, Response, Router} from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
})

//endpoints
categoriesRoutes.post('/', async (request: Request, response: Response) => {
  return createCategoryController().handle(request, response);
})

categoriesRoutes.get('/', async (request: Request, response: Response) => {
  return listCategoryController.handle(request, response);
})

categoriesRoutes.post('/import', upload.single("file"), (request: Request, response: Response) => {
  return importCategoryController.handle(request, response);
})
