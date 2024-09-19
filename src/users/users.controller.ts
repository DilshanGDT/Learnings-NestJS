import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

    @Get() //GET /users
    findAll() {
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

}
