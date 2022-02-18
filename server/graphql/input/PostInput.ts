import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input PostInput {
    title: String
  }
`;