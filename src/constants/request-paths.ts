import { BASE_PATH } from '../environments';

const API_DEVICE = process.env.API_DEVICE;

export const URL_DEVICE = {
  FRONT: `${BASE_PATH}/api/deviceService`,
  BACK: API_DEVICE ?? '',
};

