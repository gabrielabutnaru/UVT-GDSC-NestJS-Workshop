import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as ormconfig from './ormconfig'
import {UserModule} from "./user/user.module";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
