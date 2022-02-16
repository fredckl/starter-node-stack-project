import { HttpHandler } from '../../http/HttpHandler';
import { IPost } from '../../db/schema/post';
import { postService } from '../../services/postService';

interface IPostsResponse {
  ok: boolean
  error: any
  data: [IPost]
}

interface IPostResponse {
  ok: boolean
  error: any
  data: IPost
}

class PostResolverHandler {
  public getAll = HttpHandler.graphql(async () => {
    const { ok, error, data }: IPostsResponse = await postService();
    if (!ok) {
      throw new Error(error);
    }

    return data;
  });

  public create = HttpHandler.graphql(async (input: any) => {
    const { ok, error, data }: IPostResponse = await postService('', { method: 'POST', body: input });
    if (!ok) {
      throw new Error(error);
    }

    return data;
  });


  public update = HttpHandler.graphql(async ({ id, input }: any) => {
    const { ok, error, data }: IPostResponse = await postService(`/${id}`, { method: 'PUT', body: input });

    if (!ok) {
      throw new Error(error);
    }

    return data;
  });

  public remove = HttpHandler.graphql(async (id) => {
    const { ok, error, data }: IPostResponse = await postService(`/${id}`, { method: 'DELETE' });

    if (!ok) {
      throw new Error(error);
    }

    return data;
  });

  public getById = HttpHandler.graphql(async (id) => {
    const { ok, error, data }: IPostResponse = await postService(`/${id}`);

    if (!ok) {
      throw new Error(error);
    }

    return data;
  });
}

export const PostResolver = () => new PostResolverHandler();
