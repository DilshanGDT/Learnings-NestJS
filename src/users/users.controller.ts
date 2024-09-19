import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';

// Decorator - predefine funtion to run automatically
// handle /users routes
@Controller('users') 
export class UsersController {
    /*
        -- Routes to implement --
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

    @Get() //GET /users(param) or /users?role=value (querry param)
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return []
    }

    //static route
    @Get('interns') //GET /users/interns
    findAllInterns() {
        return []
    }

    // Order does matter - static route first
    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // POST /users
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }

}
