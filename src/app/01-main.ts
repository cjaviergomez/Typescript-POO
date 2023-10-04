import axios from 'axios';
import { Product } from './models/product.model';

(async () => {

    async function getProducts(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        // const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        // return response.data as Product[]; // Force type
        return data;
    }

    const products = await getProducts();
    console.log(products.map(product => `${product.id} - ${product.title}`));

})();