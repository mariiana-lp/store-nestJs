import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    getCustomers() {
        return {
            message: 'Customers'
        }
    }

    @Get(':id')
    getCustomer(@Param('id') id: string) {
        return {
            message: `customer ${id}`
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
