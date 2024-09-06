import { BASE_PATH } from '../environments';

const API___name__ = process.env.API___name__;

export const URL___name__ = {
  FRONT: `${BASE_PATH}/api/__name__Service`,
  BACK: API___name__ ?? '',
};

