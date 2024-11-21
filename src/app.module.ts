import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './UserModel';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      name: 'dest',
      uri: process.env.DATABASE_URL,
      models: [UserModel],
      autoLoadModels: true,
    }),
    SequelizeModule.forRoot({
      name: 'source',
      uri: process.env.DATABASE_URL_SOURCE,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
