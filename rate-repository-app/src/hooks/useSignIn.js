import { useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const mutationResult = await mutate({ variables: { credentials: { username: username, password: password } } });
      
      await authStorage.setAccessToken(mutationResult.data.authorize.accessToken);
      apolloClient.resetStore();

      return mutationResult;
    };
  
    return [signIn, result];
};

export default useSignIn;