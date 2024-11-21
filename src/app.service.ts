import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './UserModel';
@Injectable()
export class AppService {
  constructor(
    @InjectConnection('dest')
    private descSequelize: Sequelize,
    @InjectModel(UserModel, 'dest')
    private userModel: typeof UserModel, // this will throw error
  ) {}
  async getHello() {
    const data = await this.descSequelize.query('SELECT * FROM user');
    console.log(data);
    return 'Hello World!';
  }
}
