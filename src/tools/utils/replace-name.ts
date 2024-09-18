import { createReadStream, createWriteStream } from "fs"
import through2 from "through2"
import replaceString from "replace-string"
import { CaseConverterEnum } from "../constants"

const caseTypes = Object.values(CaseConverterEnum)

console.log(caseTypes)

createReadStream("../templates/bff-service/constants/request-paths.ts")
  .pipe(
    through2((chunk, _, done) => {
      let output = chunk.toString()

      output = replaceString(output, "__name__", "Team")

      done(null, output)
    })
  )
  .pipe(createWriteStream("../../src/out.ts"))
