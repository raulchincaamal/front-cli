import { FetchServiceBE } from 'mp-front-cli/core';
import {
  IDeviceBackServiceParams,
  IDeviceBackServiceResponse,
} from '../../interfaces/services/back/Device';
import { URL_DEVICE } from '../../constants/request-paths';

class DeviceService extends FetchServiceBE<
  IDeviceBackServiceResponse,
  IDeviceBackServiceParams
> {
  constructor() {
    super(URL_DEVICE.BACK);
  }
}

export default DeviceService;

