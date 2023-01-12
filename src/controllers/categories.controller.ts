import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoryService:CategoryService){};

    @Get(':id/products/:productId')
    getCategories(@Param('id') id: string, @Param('productId') productId: string) {
        return this.categoryService.findAll();
    }

    @Post()
    create(@Body() payload: any) {
        return this.categoryService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.categoryService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.categoryService.remove(id);
    }
}
