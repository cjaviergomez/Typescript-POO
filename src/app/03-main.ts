import { ProductHttpService } from "./services/product-http.service";


(async () => {
    console.log('-----GetAll-----');
    const productService = new ProductHttpService();
    const products = await productService.getAll();
    console.log(products.length);
    
    console.log('-----Update-----');
    const productId = products[0].id;
    const productUpdated = await productService.update(productId, {title: 'New Title'});
    console.log({ productUpdated });

    console.log('-----getById-----');
    const product = await productService.getById(productId);
    console.log({ product });
})()