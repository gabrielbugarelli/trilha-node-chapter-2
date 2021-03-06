import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationsRespository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository> (
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository> (
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository> (
  "UsersRepository",
  UsersRepository
)