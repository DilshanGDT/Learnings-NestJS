import { Controller, Get, Param } from '@nestjs/common';

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

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }
}
