import { RestResponseType } from "../../types/RestResponseType";

import { is, map, compose, omit, assoc, prop, cond, when, T, always, __ } from 'ramda';

export class OK {
  #ok = true;
  #error = null;
  #data: any = null;

  constructor(data: any) {
    this.#data = data;
  }

  render (): RestResponseType {
    return {
      ok: this.#ok,
      error: this.#error,
      data: this.formatData()
    };
  }

  formatData() {
    const formatData = (v: any) => compose(
      omit(['_id', '__v']),
      assoc('id', prop('_id')(v))
    )(v);

    return cond([
      [is(Array), map(when(is(Object), formatData))],
      [is(Object), formatData],
      [T, always(__)]
    ])(this.#data);
  }

  toString() {
    return {
      ok: this.#ok,
      error: this.#error,
      data: this.#data
    };
  }
}