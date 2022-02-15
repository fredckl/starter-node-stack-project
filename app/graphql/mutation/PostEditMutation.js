import { graphql } from 'react-relay';

export const PostEditMutation = graphql`
  mutation PostEditMutation ($input: PostInput!, $id: ID!) {
    updatePost (input: $input, id: $id) {
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