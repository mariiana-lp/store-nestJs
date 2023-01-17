import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CustomerService {
    private counterId: number = 1;
    private customers: any = [{
        id: 1,
        name: 'Nicolas',
        lastName: 'Molina',
        phone: '3111111212',
    }];

    findAll() {
        if (this.customers.length < 0) {
            throw new NotFoundException('customers not found');
        }
        return this.customers;
    }

    findOne(id: number) {
        const customer = this.customers.find((item) => item.id == id);
        if (!customer) {
            throw new NotFoundException(`customer #${id} not found`);
        }
        return customer;
    }

    create(payload: any) {
        this.counterId = this.counterId + 1;
        const newcustomer = {
            id: this.counterId,
            ...payload,
        };
        this.customers.push(newcustomer);
        return newcustomer;
    }

    update(id: number, payload: any) {
        const customer = this.findOne(id);

        if (customer) {
            const i = this.customers.findIndex((i) => i.id == id)
            this.customers[i] = {
                ...customer,
                ...payload
            };
            return this.customers[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.customers.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`customer #${id} not found`);
        }
        this.customers.splice(index, 1);
        return true;
    }

}
