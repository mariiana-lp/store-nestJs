import { IsNotEmpty, IsNumber, IsString, IsUrl, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;

    @IsUrl()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
//partylType tomar todos los atributos de crearproductDto con sus respectivas 
//validaciones pero siendo opcionales