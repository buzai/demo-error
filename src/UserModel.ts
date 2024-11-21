import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class UserModel extends Model {
  @Column
  count: number;

  @Column({
    field: 'age',
  })
  age: number;

  @Column({
    field: 'name',
  })
  name: string;
}
