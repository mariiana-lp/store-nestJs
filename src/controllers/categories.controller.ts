import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get(':id/products/:productId')
    getCategories(@Param('id') id: string, @Param('productId') productId: string) {
        return {
            message: `categories ${id} and product ${productId}`
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
