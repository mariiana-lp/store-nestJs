import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
    private counterId = 1;
    private categories: any  = [{
        id: 1,
        name: 'category 1',
        desription:' category 1 description'
    }];

    findAll() {
        if(this.categories.length < 0){
            throw new NotFoundException('Categories not found');
        } 
        return this.categories;
    }

    findOne(id: number) {
        const category = this.categories.find((item) => item.id == id);
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
        this.categories.push(newCategory);
        return newCategory;
    }

    update(id: number, payload: any) {
        const category = this.findOne(id);

        if (category) {
            const i = this.categories.findIndex((i) => i.id == id)
            this.categories[i] = {
                ...category,
                ...payload
            };
            return this.categories[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.categories.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        this.categories.splice(index, 1);
        return true;
    }
}
