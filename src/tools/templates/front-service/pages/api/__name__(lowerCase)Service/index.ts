import { validateToken } from "@src/utils/CustomValidator"
import { ApiMiddleware } from "mp-front-cli"
import { of } from "rxjs"

const api = new ApiMiddleware<unknown, unknown>()

const handler = api.get((_, uuid) => {
  /**
   * Enter your back service here
   */
  return of(true)
})

export default validateToken(handler, api)
