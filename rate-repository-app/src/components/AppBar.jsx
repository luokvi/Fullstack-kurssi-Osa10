import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import Tab from './AppBarTab';


const AppBar = () => {
    return (
      <View style={theme.container}>
        <Tab text="Repositories" linkTo="/" />
        <Tab text="Sign In" linkTo="/signin" />
      </View>
    );
  };

export default AppBar;