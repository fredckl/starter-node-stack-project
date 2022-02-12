import * as R from 'ramda';
const fetcher = require('node-fetch');


export const internalFetcher = async (url: string, params: any = {}) => {
  const baseUrl = `http://localhost:${process.env.PORT}/api/v1`;
  // @ts-ignore
  const transformBody = R.evolve({ body: JSON.stringify })
  const result = await fetcher(`${baseUrl}${url}`, transformBody(params));
  return result.json()
}