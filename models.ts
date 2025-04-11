import * as jsonfile from 'jsonfile';

interface Product {
  id: number;
  name: string;
}

class ProductCollection {
  getAll() {
    const file = jsonfile.readFile('./products.json');
    return file.then((products: Product) => products);
  }

  getById(id: number) {
    return this.getAll().then((products: Product[]) => {
      const resultado = products.find((product: Product) => product.id === id);
      return resultado;
    });
  }
}

export { ProductCollection, Product };
