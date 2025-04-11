import minimist from 'minimist';
import { ProductController, MiCLIParams } from './controllers';

function parseParams(argv: string[]): MiCLIParams {
  const parsedParams = minimist(argv);
  const result: MiCLIParams = {};

  if (parsedParams.search) {
    result.search = parsedParams.search;
  }

  if (parsedParams.add) {
    result.add = parsedParams.add;
  }

  return result;
}

function main() {
  const params = process.argv.slice(2);
  const parsedArguments = parseParams(params);
  const productController = new ProductController();

  productController.processOptions(parsedArguments).then(resultado => console.log(resultado));
}

main();
