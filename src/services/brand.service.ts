import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BrandService {
    private counterId = 1;
    private brands: any = [{
        id: 1,
        name: 'Brand 1',
        image: 'https://i.imgur.com/U4iGx1j.jpeg',
    }];

    findAll() {
        if (this.brands.length < 0) {
            throw new NotFoundException('brands not found');
        }
        return this.brands;
    }

    findOne(id: number) {
        const brand = this.brands.find((item) => item.id == id);
        if (!brand) {
            throw new NotFoundException(`brand #${id} not found`);
        }
        return brand;
    }

    create(payload: any) {
        this.counterId = this.counterId + 1;
        const newbrand = {
            id: this.counterId,
            ...payload,
        };
        this.brands.push(newbrand);
        return newbrand;
    }

    update(id: number, payload: any) {
        const brand = this.findOne(id);

        if (brand) {
            const i = this.brands.findIndex((i) => i.id == id)
            this.brands[i] = {
                ...brand,
                ...payload
            };
            return this.brands[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.brands.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`brand #${id} not found`);
        }
        this.brands.splice(index, 1);
        return true;
    }
}
