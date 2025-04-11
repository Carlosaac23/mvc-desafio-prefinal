import { readFile, writeFile } from 'fs/promises';

interface Product {
  id: number;
  name: string;
}

class ProductCollection {
  async getAll() {
    const file = await readFile('./products.json', 'utf-8');
    const products: Product[] = JSON.parse(file);
    return products;
  }

  async getById(id: number) {
    const products = await this.getAll();
    return products.find((product: Product) => product.id === id);
  }

  async addOne(newProduct: Product) {
    const products = await this.getAll();

    const exists = products.some((product: Product) => product.id === newProduct.id);
    if (exists) throw new Error(`Ya existe un producto con el id ${newProduct.id}`);

    products.push(newProduct);

    await writeFile('./products.json', JSON.stringify(products, null, 2), 'utf-8');
  }
}

export { ProductCollection, Product };
