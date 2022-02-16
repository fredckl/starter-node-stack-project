import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  input PostInput {
    title: String
  }
`;