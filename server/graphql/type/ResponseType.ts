import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  type PostsResult {
    ok: Boolean
    error: String
    data: [Post]
  }

  type PostResult {
    ok: Boolean
    error: String
    data: Post
  }

`;
