import { graphql } from 'react-relay';

export const PostCreateMutation = graphql`
  mutation PostCreateMutation ($input: PostInput!) {
    createPost (input: $input) {
      ok
      error
      data {
        id
        title
        createdAt
        updatedAt
      }
    }
  }
`;