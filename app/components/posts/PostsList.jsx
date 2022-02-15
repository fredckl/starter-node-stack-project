import React from 'react';
import PropTypes from 'prop-types';
import { postTypes } from '../../pages/posts/postTypes';
import { Button, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
const formatedDate = data => {
  const date = new Date(data);
  const month = date.getMonth();
  return `${date.getDate()}/${month.length > 1 ? month : `0${month}`}/${date.getFullYear()}`;
};

const PostsList = ({posts, onEdit, onRemove}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Created At</Th>
          <Th>Updated At</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {posts.map(({title, createdAt, updatedAt, id}) => (
          <Tr key={id}>
            <Td>{title}</Td>
            <Td>{formatedDate(createdAt)}</Td>
            <Td>{formatedDate(updatedAt)}</Td>
            <Td>
              <Flex>
                <Button mr="1" onClick={() => onEdit(id)} size="sm">Edit</Button>
                <Button colorScheme="red" size="sm" onClick={() => onRemove(id)}>Remove</Button>
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(postTypes),
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default PostsList;