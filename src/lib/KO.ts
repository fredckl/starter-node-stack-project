import { RestResponseType } from "../../types/RestResponseType";
import { stringOrNullType } from "../../types/simpleTypes";

import { isDev } from './getEnv';

export class KO {
  #ok = true;
  #error: stringOrNullType = null;
  #data = null;

  constructor (message: string) {
    this.#error = message;
  }

  render (): RestResponseType {
    return {
      ok: this.#ok,
      error: isDev() ? this.#error : 'Error',
      data: this.#data
    };
  }

  toString () {
    return {
      ok: this.#ok,
      error: this.#error,
      data: this.#data
    };
  }
}