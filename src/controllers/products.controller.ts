import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  //ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import {ParseIntPipe} from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';


@Controller('products')
export class ProductsController {

  constructor(private productService: ProductService) { }

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
  getOne(@Param('id', ParseIntPipe) id: number) {
    //return {
    //message: `products: ${id}`
    //}
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    //return {
    //message: 'action create',
    //payload
    //};
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
