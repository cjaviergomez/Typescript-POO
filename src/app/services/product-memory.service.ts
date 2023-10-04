import { faker } from '@faker-js/faker';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  addProducts(length: number) {
    for (let index = 0; index < length; index++) {
      this.add({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        categoryId: faker.number.int(),
        price: +faker.commerce.price(),
        images: []
      });
    }
  };

  add(data: CreateProductDTO): Product {
    const newProduct: Product = {
      ...data,
      id: faker.number.int(),
      category: {
        id: faker.number.int(),
        name: faker.commerce.department(),
        image: faker.image.url()
      },
    };

    this.products.push(newProduct);
    return newProduct;
  };

  getAll(): Product[] {
    return this.products;
  }

  update(id: Product['id'], updates: UpdateProductDTO): Product {
    const index = this.products.findIndex((product) => product.id === id);
    const oldProduct = this.products[index];
    this.products[index] = {
      ...oldProduct,
      ...updates,
    };
    return this.products[index];
  };

  delete(id: Product['id']) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    this.products.splice(productIndex, 1);
  };

   getById(id: Product['id']) {
    return this.products.find((product) => product.id === id);
  };

}
