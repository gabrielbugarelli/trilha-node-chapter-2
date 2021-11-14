import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {

  handle(request: Request, response: Response): Response {
    const { file } = request;
    
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    
    if (!file) {
      return response.send().status(400).json({
        error: "An error occurred in the request"
      });
    }

    importCategoryUseCase.execute(file);

    return response.send();
  }
}