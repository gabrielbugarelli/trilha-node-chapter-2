import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const {name, username, email, driver_license, password} = data;

    const user = this.repository.create({
      name, 
      username, 
      email, 
      driver_license, 
      password
    });

    await this.repository.save(user);
  }
}