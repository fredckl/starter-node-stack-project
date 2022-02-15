import PostForm from '@/components/posts/PostForm';
import PostsList from '@/components/posts/PostsList';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { usePosts } from './usePosts';

const Posts = () => {
  const {
    onCancel,
    onEdit,
    onRemove,
    onSubmit,
    showForm,
    edit,
    posts,
    isLoading,
    error
  } = usePosts();

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (showForm) return <PostForm onSubmit={onSubmit} post={edit} onCancel={onCancel}/>;
  return <div>
    <Button onClick={onEdit} colorScheme={'blue'} size="sm">Create new Post</Button>
    <PostsList posts={posts} onEdit={onEdit} onRemove={onRemove}/>
  </div>;
};


export default Posts;