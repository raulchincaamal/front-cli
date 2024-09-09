import {
  CaseConverterEnum,
  generateTemplateFiles,
} from 'generate-template-files';

generateTemplateFiles([
  {
    option: 'Front',
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: './templates/front-service/',
    },
    stringReplacers: [{ question: 'Service name', slot: '__name__' }],
    output: {
      path: '../../src',
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);

