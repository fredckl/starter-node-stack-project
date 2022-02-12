import { internalFetcher } from "../http/fetcher";

export const postService = (url: string | null = '', params: any = {}) => internalFetcher(
  `/posts${url}`,
  { ...params, headers: { 'Content-Type': 'application/json' } }
)