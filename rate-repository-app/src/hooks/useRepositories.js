import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order) => {
  const [repositories, setRepositories] = useState();
  const [orderBy, orderDir] = order;
  
  const { data, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network',
    variables: {orderBy: orderBy, orderDir: orderDir}, });

  const fetchRepositories = () => {
    if (!loading){
      const response = data.repositories;

      setRepositories(response);
    }
  };

  useEffect(() => {
    fetchRepositories();
  });

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;