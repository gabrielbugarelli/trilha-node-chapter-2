import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";

export class SpecificationRepository implements ISpecificationsRepository{
  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }
  
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })
    
    this.specifications.push(specification);
  }
  
  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(specification => specification.name === name);

    return specification;
  }
}