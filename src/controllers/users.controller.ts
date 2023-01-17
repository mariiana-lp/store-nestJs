import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UserService){}

    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.userService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.userService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.remove(id);
    }

}
