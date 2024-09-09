import { BASE_PATH } from "../environments"

const API___name__ConstantCase__ = process.env.API___name__ConstantCase__

export const URL___name__ConstantCase__ = {
  FRONT: `${BASE_PATH}/api/__name__(lowerCase)Service`,
  BACK: API___name__ConstantCase__ ?? "",
}
