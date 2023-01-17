import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
    private counterId = 1;
    private users: any = [{
        id: 1,
        email: 'correo@mail.com',
        password: '12345',
        role: 'admin',
    }];

    findAll() {
        if (this.users.length < 0) {
            throw new NotFoundException('users not found');
        }
        return this.users;
    }

    findOne(id: number) {
        const category = this.users.find((item) => item.id == id);
        if (!category) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        return category;
    }

    create(payload: any) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...payload,
        };
        this.users.push(newCategory);
        return newCategory;
    }

    update(id: number, payload: any) {
        const category = this.findOne(id);

        if (category) {
            const i = this.users.findIndex((i) => i.id == id)
            this.users[i] = {
                ...category,
                ...payload
            };
            return this.users[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.users.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        this.users.splice(index, 1);
        return true;
    }
}
