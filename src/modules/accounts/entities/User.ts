import { v4 as uuidV4 } from'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("users")
export class User {

  @PrimaryColumn()
  id: string = '';

  @Column()
  name: string = '';

  @Column()
  email: string = '';

  @Column()
  password: string = '';

  @Column()
  driver_license: string | undefined;

  @Column()
  isAdmin: boolean | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}