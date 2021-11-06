import { Request, Response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

export const specificationRoutes = Router();

specificationRoutes.post('/', (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
})

