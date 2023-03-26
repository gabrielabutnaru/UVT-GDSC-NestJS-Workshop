
import {Controller, Get, Param, Query} from "@nestjs/common";
import {MovieService} from "./movie.service";

@Controller('movies')
export class MovieController {
    constructor(private readonly appService: MovieService) {}

    @Get()
    getMovies() {
        return this.appService.getMovies();
    }


    @Get("/movie/:id")
    getMoviesById(@Param("id") id) {
        return this.appService.getMoviesById(id);
    }
    @Get("/sort")
    sortMovies(@Query("sort") sort) {
        return this.appService.sortMovies(sort);
    }
}
