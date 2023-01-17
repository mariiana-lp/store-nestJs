import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class OrderService {
    private counterId = 1;
    private orders: any = [{
        id: 1,
        name: 'order 1',
        desription:' order 1 description'
    }];

    findAll() {
        if(this.orders.length < 0){
            throw new NotFoundException('orders not found');
        } 
        return this.orders;
    }

    findOne(id: number) {
        const order = this.orders.find((item) => item.id == id);
        if (!order) {
            throw new NotFoundException(`order #${id} not found`);
        }
        return order;
    }

    create(payload: any) {
        this.counterId = this.counterId + 1;
        const neworder = {
            id: this.counterId,
            ...payload,
        };
        this.orders.push(neworder);
        return neworder;
    }

    update(id: number, payload: any) {
        const order = this.findOne(id);

        if (order) {
            const i = this.orders.findIndex((i) => i.id == id)
            this.orders[i] = {
                ...order,
                ...payload
            };
            return this.orders[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.orders.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`order #${id} not found`);
        }
        this.orders.splice(index, 1);
        return true;
    }
}
