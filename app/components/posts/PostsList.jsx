import React from 'react';
import PropTypes from 'prop-types';
import { postTypes } from '../../pages/posts/postTypes';

const PostsList = ({posts}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({title, createdAt, updatedAt, id}) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(postTypes)
};

export default PostsList;