import { gql } from 'apollo-server-core';
import { PostResolver } from '../resolvers/PostResolver';

export const typeDefs = gql`

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: PostsResult
    getByIdPost(id: ID!): PostResult
  }

  type Mutation {
    createPost(input: PostInput!): PostResult
    updatePost(input: PostInput!, id: ID!): PostResult
    removePost(id: ID!): PostResult

  }
`;

export const resolvers = {
  Query: {
    posts: () => PostResolver().getAll(),
    getByIdPost: (parent: any, { id }: any) => PostResolver().getById(id)
  },

  Mutation: {
    createPost: (parent: any, { input }: any) => PostResolver().create(input),
    updatePost: (parent: any, { id, input }: any) => PostResolver().update({ id, input }),
    removePost: (parent: any, { id }: any) => PostResolver().remove(id),
  }
};
