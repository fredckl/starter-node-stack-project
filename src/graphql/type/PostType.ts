import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    createdAt: String
    updatedAt: String
  }
`