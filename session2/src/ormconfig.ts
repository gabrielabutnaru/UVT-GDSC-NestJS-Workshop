import { DataSourceOptions } from 'typeorm';
import {User} from "./user/user.entity";

const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'session2',
  entities: [__dirname + '/**/*.entity.{ts,js}', User],
  synchronize: true,
};

export = config;
