import { createReadStream, createWriteStream } from "fs"
import {
  CaseConverter,
  Context,
  CONTEXT_KEY,
  MODULE_NAME_KEY,
  OUTPUT_FILENAME,
} from "../constants"
import StringUtility from "./string-utility"
import through2 from "through2"
import replaceString from "replace-string"
import { IPathConfig, IReplacerString } from "../interfaces"

export class GenerateTemplateFiles {
  private moduleName: string = ""

  constructor(moduleName: string) {
    this.moduleName = moduleName
  }

  generate() {
    const pathsConfig: IPathConfig[] = [
      {
        entry: "src/tools/templates/constants/front-request-paths.ts",
        output: {
          path: OUTPUT_FILENAME.CONSTANTS,
        },
      },
      {
        entry: "src/tools/templates/interfaces/front.ts",
        output: {
          context: Context.Front,
          path: OUTPUT_FILENAME.INTERFACES,
        },
      },
    ]

    pathsConfig.forEach(pathConfig => {
      this.replaceModuleName(pathConfig)
    })
  }

  private replaceModuleName(pathConfig: IPathConfig) {
    const { entry, output } = pathConfig
    const moduleCases = this.composeModuleCases()
    const replaceModulePathName = moduleCases.reduce(
      (outputPath: string, replacer) => {
        return replaceString(outputPath, replacer.slot, replacer.slotValue)
      },
      output.path
    )
    const outputPath = replaceString(
      replaceModulePathName,
      CONTEXT_KEY,
      output.context ?? ""
    )
    console.log("output 🥵", outputPath)

    createReadStream(entry)
      .pipe(
        through2((chunk, _, done) => {
          let output = chunk.toString()

          moduleCases.forEach(replacer => {
            output = replaceString(output, replacer.slot, replacer.slotValue)
          })

          done(null, output)
        })
      )
      .pipe(createWriteStream(outputPath))
  }

  private composeModuleCases() {
    const caseConverters = Object.values(CaseConverter)
    const moduleToCases = caseConverters.map<IReplacerString>(
      (caseConverter: string) => {
        return {
          slot: `${MODULE_NAME_KEY}${caseConverter}`,
          slotValue: StringUtility.toCase(
            this.moduleName,
            caseConverter as CaseConverter
          ),
        }
      }
    )

    return [
      ...moduleToCases,
      {
        slot: MODULE_NAME_KEY,
        slotValue: StringUtility.toCase(this.moduleName, CaseConverter.None),
      },
    ] as IReplacerString[]
  }
}
