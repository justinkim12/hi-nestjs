import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe("getAll",()=>{
    it("should return an array",()=>{
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("createMovie",()=>{
    it("should create movie",()=>{
      const beforeCreate = service.getAll().length;
      service.createMovie({title:'Title',genres:['sf'],year:2000});
      
      expect(service.getAll().length).toBeGreaterThan(beforeCreate); 
    })
  })


  describe("getOne",()=>{

    it("should be defined",()=>{
      service.createMovie({title:'Title',genres:['sf'],year:2000});

      const findMovie = service.getOne(1);
      expect(findMovie).toBeDefined();
    });

    it("should throw 404 error",()=>{
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });


  describe("deleteOne",()=>{

    it("deletes a movie",()=>{
      service.createMovie({title:'Title',genres:['sf'],year:2000});
      const beforeDelete = service.getAll().length
      service.deleteOne(1);
      
      expect(service.getAll().length).toBeLessThan(beforeDelete);

    });

    it("should throw 404 error",()=>{
      try{
        service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

  });

  });
