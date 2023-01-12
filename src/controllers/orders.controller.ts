import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getOrders() {
        return {
            message: 'Orders'
        }
    }

    @Get(':id')
    getOrder(@Param('id') id: string) {
        return {
            message: `order ${id}`
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
