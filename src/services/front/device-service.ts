import { FetchServiceFE } from 'mp-front-cli/core';
import {
  IDeviceFrontServiceParams,
  IDeviceFrontServiceResponse,
} from '../../interfaces/services/front/Device';
import { URL_DEVICE } from '../../constants/request-paths';

class DeviceService extends FetchServiceFE<
  IDeviceFrontServiceResponse,
  IDeviceFrontServiceParams
> {
  constructor() {
    super(URL_DEVICE.FRONT);
  }
}

export default DeviceService;

