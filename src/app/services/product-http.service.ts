import axios from "axios";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {

    private url = 'https://api.escuelajs.co/api/v1/products';
    
    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.url);
        return data;
    }

    async add(dto: CreateProductDTO): Promise<Product> {
        const { data } = await axios.post<Product>(this.url, dto);
        return data; 
    }

    async update(id: Product['id'], updates: UpdateProductDTO): Promise<Product> {
        const { data } = await axios.put<Product>(`${this.url}/${id}`, updates);
        return data;
    }

    async delete(id: Product['id']): Promise<void> {
        await axios.delete<Product>(`${this.url}/${id}`);
    }
    
    async getById(id: Product['id']): Promise<Product>{
        const { data } = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }


}