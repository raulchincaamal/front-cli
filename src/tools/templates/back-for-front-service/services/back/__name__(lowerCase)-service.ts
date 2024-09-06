import { FetchServiceBE } from 'mp-front-cli/core';
import {
  I__name__BackServiceParams,
  I__name__BackServiceResponse,
} from '../../interfaces/services/back/__name__';
import { URL___name__ } from '../../constants/request-paths';

class __name__Service extends FetchServiceBE<
  I__name__BackServiceResponse,
  I__name__BackServiceParams
> {
  constructor() {
    super(URL___name__.BACK);
  }
}

export default __name__Service;

