import axios from 'axios';

(async () => {

    function delay(time: number) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('string');
            }, time);
        });
    }

    function getProducts() {
        return axios.get('https://api.escuelajs.co/api/v1/products');
    }

    async function getProductsAsync() {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        return response.data;
    }

    console.log('--'.repeat(10));
    console.log(await delay(3000));

    const products = await getProducts();
    console.log(products.data);

    const productsV2 = await getProductsAsync();
    console.log(productsV2);
})();