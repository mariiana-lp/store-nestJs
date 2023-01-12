import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { BrandService } from '../services/brand.service'

@Controller('brands')
export class BrandsController {

    constructor(private brandService: BrandService) { }

    @Get()
    getBrands() {
        return this.brandService.findAll();
    }

    @Get(':id')
    getBrand(@Param('id') id: number) {
        return this.brandService.findOne(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.brandService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.brandService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.brandService.remove(id);
    }
}
