import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { query } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
        // + - convert to a number
        // parseINT convert unari + (parseInt transform string to number for validation)
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }

}
