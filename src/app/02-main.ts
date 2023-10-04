import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.addProducts(2);
const products = productService.getAll();
const productId = products[0].id;
console.log(productService.getAll());

console.log('Updating...');
productService.update(productId, { title: 'Update'});
console.log(productService.getAll());
