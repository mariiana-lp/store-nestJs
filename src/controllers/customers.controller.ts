import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomersController {
    constructor (private customerService: CustomerService) {}

    @Get()
    getCustomers() {
        return this.customerService.findAll();
    }

    @Get(':id')
    getCustomer(@Param('id') id: number) {
        return  this.customerService.findOne(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.customerService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.customerService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.customerService.remove(id);
    }
}
