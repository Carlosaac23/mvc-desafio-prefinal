import minimist from 'minimist';
import { ProductController, MiCLIParams } from './controllers';
import { Product } from './models';

function parseParams(argv: string[]): MiCLIParams {
  const parsedParams = minimist(argv);
  if (parsedParams.search) {
    return { search: parsedParams.search };
  } else {
    return {};
  }
}

function main() {
  const params = process.argv.slice(2);
  const parsedArguments = parseParams(params);
  const productController = new ProductController();
  productController.processOptions(parsedArguments).then((resultado: Product) => console.log(resultado));
}

main();
