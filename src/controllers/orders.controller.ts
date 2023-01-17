import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('orders')
export class OrdersController {

    constructor(private orderService:OrderService){}

    @Get()
    getOrders() {
        return this.orderService.findAll();
    }

    @Get(':id')
    getOrder(@Param('id') id: number) {
        return this.orderService.findOne(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.orderService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.orderService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.orderService.remove(id);
    }
}
