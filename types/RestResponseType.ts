import { stringOrNullType } from "./simpleTypes";

export type RestResponseType = {
  ok: boolean
  error: stringOrNullType,
  data: any
}