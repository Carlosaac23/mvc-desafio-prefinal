import { ProductCollection } from './models';

export type MiCLIParams = {
  search?: string;
};

class ProductController {
  products: ProductCollection;

  constructor() {
    this.products = new ProductCollection();
  }

  processOptions(options: MiCLIParams) {
    if (options.search) {
      return this.products.getById(Number(options.search));
    } else {
      return this.products.getAll();
    }
  }
}

export { ProductController };
