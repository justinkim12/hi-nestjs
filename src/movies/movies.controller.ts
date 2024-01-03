import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all";
    }

    
    @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    //search가 위에 있어야 search 주소를 id로 생각 안 함
    @Get("/:id")
    getOne(@Param("id") id: string){
        return `This will return movie with the id: ${id}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    remove(@Param("id") id: string){
        return `This will delete a movie ${id}`;
    }

    @Patch('/:id')
    update(@Param("id") id:string, @Body() updatedData){
        return updatedData;
        
    }


}
