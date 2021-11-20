import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("Token missing", 401);
  }

  /**
   * A posição 0 do array vem o Bearer, o que não é importante nesse momento
   * logo, então é por isso que passamos somente a ',' e pegamos o token do indice 1, 
   * que por sua vez, tras o token.
   */
  const [, token] = authHeader.split(' ');

  try{
    const {sub: user_id} = verify(token, "6c224e12f25f0ad981232a4503a49d0b") as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if(!user) {
      throw new AppError("User does not exist!", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}