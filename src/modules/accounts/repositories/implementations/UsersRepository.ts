import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const {name, email, driver_license, password, id, avatar} = data;

    const user = this.repository.create({
      name, 
      email, 
      driver_license, 
      password,
      id,
      avatar
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});

    if(!user) {
      throw new Error('User not exist!');
    }

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if(!user) {
      throw new Error("User not exist!");
    }

    return user;
  }
}