import { Module } from '@nestjs/common';
import {HelloWorldModule} from "./hello-world/hello-world.module";
import { MathModule } from './math/math.module';
import {MovieModule} from "./movie/movie.module";

@Module({
  imports: [HelloWorldModule, MathModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
