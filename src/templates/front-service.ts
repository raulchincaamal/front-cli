import { capitalize } from '../functions/index.js';
import { ServiceTemplate } from '../types/index.js';

export const frontServiceTemplate: ServiceTemplate = (moduleName) => {
  const module = capitalize(moduleName);
  const snakeCaseName = moduleName
    .split(' ')
    .map((name) => name.toUpperCase())
    .join('_');
  const className = `${module}Service`;
  const urlTemplate = `URL_${snakeCaseName}`;

  return `
    import { ${urlTemplate} } from "@src/constants/enrollment"
    import type {
      I${module}Params,
      I${module}Response,
    } from "@src/interfaces/enrollment"
    import { FetchServiceFE } from "mp-front-cli/core"

    class ${className} extends FetchServiceFE<
      I${module}Response,
      I${module}Params
    > {
      constructor() {
        super(${urlTemplate}.FRONT)
      }
    }

    export default ${className}
  `;
};

