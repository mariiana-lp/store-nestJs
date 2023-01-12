import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {
            message: 'Users'
        }
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return {
            message: `user ${id}`
        }
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'action create',
            payload
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return {
            message: `action delete id ${id}`
        }
    }

}
