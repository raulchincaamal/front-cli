// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from "express"
import { CaseConverter, MODULE_NAME_KEY } from "./tools/constants"
import StringUtility from "./tools/utils/string-utility"
import { GenerateTemplateFiles } from "./tools/utils/generate-template-files"

// Create an Express application
const app = express()

// Specify the port number for the server
const port: number = 3000

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  const caseTypes = Object.values(CaseConverter)

  const moduleNameValue = "Device"
  const moduleToCases = caseTypes.map((caseType: string) => {
    return {
      slot: `${MODULE_NAME_KEY}${caseType}`,
      slotValue: StringUtility.toCase(
        moduleNameValue,
        caseType as CaseConverter
      ),
    }
  })

  const generateFiles = new GenerateTemplateFiles(moduleNameValue)
  generateFiles.generate()

  // Send a response to the client
  res.json({ cases: moduleToCases })
})

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running 🚀 on http://localhost:${port}`)
})
