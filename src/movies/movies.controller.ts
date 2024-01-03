import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(){
        return this.moviesService.getAll();
    }

    
    @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    //search가 위에 있어야 search 주소를 id로 생각 안 함
    @Get("/:id")
    getOne(@Param("id") id: string){
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        this.moviesService.createMovie(movieData);

    }

    @Delete("/:id")
    remove(@Param("id") id: string){
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:id')
    update(@Param("id") id:string, @Body() updatedData){
        return updatedData;
        
    }


}
