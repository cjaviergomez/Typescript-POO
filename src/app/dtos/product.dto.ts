import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export type UpdateProductDTO = Partial<CreateProductDTO>;

