import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('')
export class AppController {

    @Get()
    home(){
        return "Welcome";
    }
}

