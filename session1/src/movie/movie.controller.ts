import {Controller, Get, Param, Query} from '@nestjs/common';
import {MovieService} from "./movie.service";

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }

  @Get('movie/:id')
  getMovieById(@Param("id") id) {
    console.log("ID: ", id)
    return this.movieService.getMovieById(id);
  }

  @Get('/sort')
  sortMovies(@Query("sort") sort) {
    return this.movieService.sortMovies(sort);
  }
}
