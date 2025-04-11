import { ProductCollection, Product } from './models';

export type MiCLIParams = {
  search?: string | number;
  add?: string;
};

class ProductController {
  products: ProductCollection;

  constructor() {
    this.products = new ProductCollection();
  }

  async processOptions(options: MiCLIParams) {
    if (options.search) {
      return this.products.getById(Number(options.search));
    }

    if (options.add) {
      try {
        const parsedProduct: Product = JSON.parse(options.add);
        await this.products.addOne(parsedProduct);
        return 'Producto agregado con exito';
      } catch (error) {
        return `Error al agregar producto ${(error as Error).message}`;
      }
    }

    return this.products.getAll();
  }
}

export { ProductController };
