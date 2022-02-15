import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose, path } from 'ramda';
import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { postTypes } from '../../pages/posts/postTypes';

const PostForm = ({onSubmit, onCancel, post}) => {
  const [inputData, setInputData] = useState(post ? post.title :  '');
  const onChange = compose(setInputData, path(['target', 'value']));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex alignItems={'flex-end'}>
          <FormControl>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input id='title' type='title' value={inputData} onChange={onChange} />
          </FormControl>
          <Button type='submit' colorScheme={'teal'} size={'md'} ml={2}>Save</Button>
        </Flex>

      </form>
      <Box mt={3}>
        <Button onClick={onCancel}>Cancel</Button>
      </Box>
    </div>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  post: postTypes
};

export default PostForm;