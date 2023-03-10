import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandsController } from './controllers/brands.controller';
import { ProductService } from './services/product.service';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';



@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CustomersController,
    BrandsController
  ],
  providers: [AppService, ProductService, BrandService, CategoryService, CustomerService, UserService, OrderService],
})
export class AppModule { }
