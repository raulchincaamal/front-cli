import { validateToken } from "@src/utils/CustomValidator"
import type {
  I__name__BackServiceParams,
  I__name__BackServiceResponse,
} from "@src/interfaces/services/back/__name__"
import __name__Service from "@src/services/back/__name__(lowerCase)-service"
import { ApiMiddleware } from "mp-front-cli"
import { of, switchMap } from "rxjs"

const api = new ApiMiddleware<
  I__name__BackServiceParams,
  I__name__BackServiceResponse
>()

const handler = api.get(({ uuid }, uuidInterno) => {
  const __name__LowerCase__Service = new __name__Service()

  return __name__LowerCase__Service
    .fetchData({ uuid }, uuidInterno)
    .pipe(switchMap(response => of(response.data.attributes)))
})

export default validateToken(handler, api)
