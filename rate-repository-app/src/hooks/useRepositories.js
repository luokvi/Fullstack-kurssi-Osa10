import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network', });

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