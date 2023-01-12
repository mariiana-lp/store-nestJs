import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import {CreateProductDto, UpdateProductDto} from '../dtos/products.dtos'

@Injectable()
export class ProductService {
    private counterId = 1;
    private products: Product[] = [{
        id: 1,
        name: "Product 1",
        description: 'Product description',
        price: 1222,
        stock: 1,
        image: ''
    }];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find((item) => item.id == id);
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const p = this.findOne(id);

        if (p) {
            const i = this.products.findIndex((i) => i.id == id)
            this.products[i] = {
                ...p,
                ...payload
            };
            return this.products[i];
        }
        return null;
    }


    remove(id: number) {
        const index = this.products.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }


}
