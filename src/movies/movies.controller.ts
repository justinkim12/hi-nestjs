import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './entities/dto/create-movie.dto';
import { UpdateMovieDTO } from './entities/dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }


    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    //search가 위에 있어야 search 주소를 id로 생각 안 함
    @Get("/:id")
    getOne(@Param("id") id: number) {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        this.moviesService.createMovie(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:id')
    update(@Param("id") id: number, @Body() updatedData: UpdateMovieDTO) {
        return this.moviesService.updateMovie(id, updatedData)

    }


}
