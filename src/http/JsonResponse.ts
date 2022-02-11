import { always, assoc, compose, cond, is, map, omit, prop, T, when, __ } from "ramda";

export class JsonResponse {

  public static formatData(data: any = null): any {

    const formatData = (v: any) => compose(
      omit(['_id', '__v']),
      assoc('id', prop('_id')(v))
    )(v);

    return cond([
      [is(Array), map(when(is(Object), formatData))],
      [is(Object), formatData],
      [T, always(__)]
    ])(data);
  }
}