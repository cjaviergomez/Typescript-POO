import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    add(data: CreateProductDTO): Product | Promise<Product>;
    update(id: Product['id'], updates: UpdateProductDTO): Product | Promise<Product>;
    delete(id: Product['id']): void;
    getById(id: Product['id']): Product | undefined | Promise<Product>;
}