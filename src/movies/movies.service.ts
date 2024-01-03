import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './entities/dto/create-movie.dto';
import { UpdateMovieDTO } from './entities/dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`No Movie id ${id}`);
        }
        return movie;
    }

    deleteOne(id: number): boolean {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        return true;
    }

    createMovie(movieData: CreateMovieDTO) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    updateMovie(id: number, updatedData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.deleteOne(id);

        this.movies.push({ ...movie, ...updatedData });
    }
}
