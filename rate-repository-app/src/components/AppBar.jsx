import React from 'react';
import { View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

import theme from '../theme';
import Tab from './AppBarTab';


const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  
  const { data, loading } = useQuery(GET_AUTHORIZED_USER);
  let signedIn = false;
  if (!loading && data.authorizedUser){
    signedIn = true;
  }

  const signOut = async () => {
    console.log('signing out');
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    signedIn = false;

  };

    return (
      <View style={theme.container}>
        <ScrollView horizontal>
          <Tab text="Repositories" linkTo="/" />

          {signedIn
            ? <Tab text="Sign Out" onPress={signOut}/>
            : <Tab text="Sign In" linkTo="/signin" />
          }
        </ScrollView>
        
      </View>
    );
  };

export default AppBar;