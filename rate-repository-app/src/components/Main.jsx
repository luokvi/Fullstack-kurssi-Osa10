import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';
import SingleRepository from './SingleRepository';

const SingleRepo = () => {
  const { id } = useParams();
  return <SingleRepository id={id}/>;
};

const Main = () => {
  return (
    <View style={theme.body}>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>

        <Route path="/signin" exact>
          <SingIn />
        </Route>

        <Route path="/:id">
          <SingleRepo />
        </Route>

        <Redirect to="/" />
      </Switch>
      
    </View>
  );
};

export default Main;