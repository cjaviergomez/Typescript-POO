import axios from "axios";
import { UpdateProductDTO } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpService<TypeClass> {

    constructor(private url: string){}

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }

     async update<ID, DTO>(id: ID, updates: DTO): Promise<TypeClass> {
        const { data } = await axios.put<TypeClass>(`${this.url}/${id}`, updates);
        return data;
    }

}

(async ()=> {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const productsService = new BaseHttpService<Product>(url);
    const products = await productsService.getAll();
    console.log('Products', products.length);
    productsService.update<Product['id'], UpdateProductDTO>(1, {
        title: 'Learning Generics'
    })

    const urlCategories = 'https://api.escuelajs.co/api/v1/categories';
    const categoriesService = new BaseHttpService<Category>(urlCategories);
    const categories = await categoriesService.getAll();
    console.log('Categories', categories.length);
})();