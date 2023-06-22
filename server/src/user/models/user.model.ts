import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  nickName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  receptsList: string;
}
