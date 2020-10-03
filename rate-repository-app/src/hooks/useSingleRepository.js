import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SINGLE_REPO } from '../graphql/queries';

const useSingleRepository = (repoId) => {
  const [repository, setRepository] = useState();
  const { data, loading } = useQuery(GET_SINGLE_REPO, { variables: { id: repoId }, });
  
  const fetch = () => {
    if (!loading){
      const response = data.repository;
      setRepository(response);
    }
   };

   useEffect(() => {
    fetch();
  });

  return { repository, loading };
};

export default useSingleRepository;