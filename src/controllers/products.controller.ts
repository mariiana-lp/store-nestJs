import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res
} from '@nestjs/common';
import {Response} from 'express';
import {ProductService} from '../services/product.service'


@Controller('products')

export class ProductsController {

  constructor (private productService: ProductService){}

  @Get('filter')
  getFilter() {
    return `im a filter`;
  }

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    //return {
      //message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`
    //};

    return this.productService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    //return {
      //message: `products: ${id}`
    //}
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    //return {
      //message: 'action create',
      //payload
    //};
   return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
