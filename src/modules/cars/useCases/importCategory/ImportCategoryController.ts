import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
  private importCategoryUseCase: ImportCategoryUseCase;

  constructor(importCategoryUseCase: ImportCategoryUseCase) {
    this.importCategoryUseCase = importCategoryUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { file } = request;
    
    if (!file) {
      return response.send().status(400).json({
        error: "An error occurred in the request"
      });
    }

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}