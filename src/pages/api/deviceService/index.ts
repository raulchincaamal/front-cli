import { validateToken } from '@src/utils/CustomValidator';
import {
  IDeviceBackServiceParams,
  IDeviceBackServiceResponse,
} from '../../../interfaces/services/back/Device';
import DeviceService from '../../../services/back/device-service';
import { ApiMiddleware } from 'mp-front-cli';
import { of, switchMap } from 'rxjs';

const api = new ApiMiddleware<
  IDeviceBackServiceParams,
  IDeviceBackServiceResponse
>();

const handler = api.get(({ uuid }, uuidInterno) => {
  const deviceService = new DeviceService();

  return deviceService
    .fetchData({ uuid }, uuidInterno)
    .pipe(switchMap((response) => of(response.data.attributes)));
});

export default validateToken(handler, api);

