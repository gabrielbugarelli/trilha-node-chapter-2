import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}

  async execute ({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if(userAlreadyExist) {
      throw new Error('User already exist!');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name, 
      email, 
      driver_license, 
      password: passwordHash
    });
  }
}