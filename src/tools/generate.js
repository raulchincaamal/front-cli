import {
  CaseConverterEnum,
  generateTemplateFiles,
} from "generate-template-files"

generateTemplateFiles([
  {
    option: "Front",
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: "./templates/front-service/",
    },
    stringReplacers: [{ question: "Service name", slot: "__name__" }],
    output: {
      path: "../../src",
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    },
    onComplete: results => {
      console.log(`results`, results)
    },
  },
  {
    option: "Back",
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: "./templates/back-service/",
    },
    stringReplacers: [{ question: "Service name", slot: "__name__" }],
    output: {
      path: "../../src",
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    },
    onComplete: results => {
      console.log(`results`, results)
    },
  },
  {
    option: "BFF",
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: "./templates/bff-service/",
    },
    stringReplacers: [{ question: "Service name", slot: "__name__" }],
    output: {
      path: "../../src",
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    },
    onComplete: results => {
      console.log(`results`, results)
    },
  },
])
