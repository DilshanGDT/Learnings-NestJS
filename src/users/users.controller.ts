import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { UsersService } from './users.service';

// Controller : handle /users routes

// Decorator - predefine funtion to run automatically
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

    constructor(private readonly usersService: UsersService) {}

    @Get() //GET /users(param) or /users?role=value (querry param)
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    /* static route
    @Get('interns') //GET /users/interns
    findAllInterns() {
        return []
    }
    */

    // Order does matter - static route first
    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
        // + - convert to a number 
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.usersService.create(user)
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id)
    }

}
