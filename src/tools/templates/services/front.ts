import { FetchServiceFE } from "mp-front-cli/core"
import type {
  I__name__FrontServiceParams,
  I__name__FrontServiceResponse,
} from "@src/interfaces/services/front/__name__"
import { URL___name__ConstantCase__ } from "@src/constants/request-paths"

class __name__Service extends FetchServiceFE<
  I__name__FrontServiceResponse,
  I__name__FrontServiceParams
> {
  constructor() {
    super(URL___name__ConstantCase__.FRONT)
  }
}

export default __name__Service
