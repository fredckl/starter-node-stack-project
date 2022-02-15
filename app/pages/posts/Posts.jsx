import React from 'react';
import { useFetchQuery } from '@/hooks/useFetchQuery';
import PostsList from '@/components/posts/PostsList';
import { PostsQuery } from '@/graphql/query/PostsQuery';

const Posts = () => {
  const {posts, isLoading, error} = useFetchQuery({query: PostsQuery, dataProp: 'posts.data'});

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  return <PostsList posts={posts}/>;
};


export default Posts;