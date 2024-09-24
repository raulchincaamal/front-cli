import { Context } from "../constants"

interface IOutputConfig {
  path: string
  context?: Context
}

export interface IPathConfig {
  entry: string
  output: IOutputConfig
}

export interface IReplacerString {
  slot: string
  slotValue: string
}
