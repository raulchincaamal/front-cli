import { FetchServiceFE } from 'mp-front-cli/core';
import {
  I__name__FrontServiceParams,
  I__name__FrontServiceResponse,
} from '../../interfaces/services/front/__name__';
import { URL___name__ } from '../../constants/request-paths';

class __name__Service extends FetchServiceFE<
  I__name__FrontServiceResponse,
  I__name__FrontServiceParams
> {
  constructor() {
    super(URL___name__.FRONT);
  }
}

export default __name__Service;

