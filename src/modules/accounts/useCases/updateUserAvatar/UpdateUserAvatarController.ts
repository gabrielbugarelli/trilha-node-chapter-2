import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = request.file?.fieldname;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    if(!avatar_file) {
      throw new AppError("There is no avatar file, please upload.");
    }

    updateUserAvatarUseCase.execute({user_id: id, avatar_file});

    return response.status(204).send();
  }
}