import { UpdateProductDTO } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductCrudService {
    private url = 'https://api.escuelajs.co/api/v1/products';
    private baseService = new BaseHttpService<Product>(this.url);

    async update(id: Product['id'], dto: UpdateProductDTO) {
        return this.baseService.update(id, dto);
    }
}