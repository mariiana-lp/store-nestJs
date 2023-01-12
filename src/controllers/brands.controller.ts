import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

    @Get()
    getBrands() {
        return {
            message: 'Brands'
        }
    }

    @Get(':id')
    getBrand(@Param('id') id: string) {
        return {
            message: `brands ${id}`
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
