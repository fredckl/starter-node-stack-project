import { graphql } from 'react-relay';

export const PostRemoveMutation = graphql`
  mutation PostRemoveMutation ($id: ID!) {
    removePost (id: $id) {
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