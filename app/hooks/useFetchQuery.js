import { head, path, prop, split } from 'ramda';
import { useQuery } from 'relay-hooks';

const options = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
};

export const useFetchQuery = ({
  query,
  variables,
  dataProp = 'data'
}) => {
  const {data, error, retry, isLoading} = useQuery(query, variables, options);
  const splittedProp = split('.', dataProp);
  const headProp = head(splittedProp);

  return {
    result: prop(headProp, data),
    [headProp]: path(splittedProp, data),
    retry,
    isLoading,
    error
  };
};