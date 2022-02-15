import { graphql } from 'react-relay';

export const PostsQuery = graphql`
  query PostsQuery {
   posts {
      ok
      error
      data {
        id
        title
        createdAt
        updatedAt
      }
    }
  }`;
