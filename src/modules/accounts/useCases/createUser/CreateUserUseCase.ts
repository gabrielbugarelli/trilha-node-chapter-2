import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}

  async execute ({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name, 
      email, 
      driver_license, 
      password
    });
  }
}