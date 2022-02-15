import { compose, find, propEq } from 'ramda';
import { useState } from 'react';
import { useMutation } from 'relay-hooks';
import { PostCreateMutation } from '../../graphql/mutation/PostCreateMutation';
import { PostEditMutation } from '../../graphql/mutation/PostEditMutation';
import { PostRemoveMutation } from '../../graphql/mutation/PostRemoveMutation';
import { PostsQuery } from '../../graphql/query/PostsQuery';
import { useFetchQuery } from '../../hooks/useFetchQuery';

export const usePosts = () => {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState();
  const {posts, isLoading, error, retry} = useFetchQuery({query: PostsQuery, dataProp: 'posts.data'});
  const [commitEdit] = useMutation(PostEditMutation);
  const [commitCreate] = useMutation(PostCreateMutation);
  const [commitRemove] = useMutation(PostRemoveMutation);

  const onEdit = (id) => {
    setShowForm(true);
    if (id) {
      setEdit(find(propEq('id', id), posts));
    }
  };

  const onMutated = () => {
    setShowForm(false);
    setEdit(null);
  };

  const onSubmit = (input) => {
    const variables = {
      input: {
        title: input
      }
    };


    if (edit && edit.id) {
      commitEdit({
        variables: {
          ...variables,
          id: edit.id
        },
        onCompleted: onMutated
      });
    } else {
      commitCreate({
        variables: {
          ...variables
        },
        onCompleted: compose(retry, onMutated)
      });
    }
  };

  const onCancel = () => setShowForm(false);

  const onRemove = (id) => {
    commitRemove({
      variables: {
        id
      },
      onCompleted: compose(retry, onMutated)
    });
  };

  return {
    onCancel,
    onEdit,
    onRemove,
    onSubmit,
    showForm,
    edit,
    posts,
    isLoading,
    error
  };
};