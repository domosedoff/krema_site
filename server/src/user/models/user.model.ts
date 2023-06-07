import { Model, Column } from 'sequelize-typescript';

export class User extends Model {
  @Column
  firstName: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;
}
