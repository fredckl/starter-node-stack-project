import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    createdAt: String
    updatedAt: String
  }
`;
