import React from 'react';
import { View, ScrollView } from 'react-native';
import theme from '../theme';
import Tab from './AppBarTab';


const AppBar = () => {
    return (
      <View style={theme.container}>
        <ScrollView horizontal>
          <Tab text="Repositories" linkTo="/" />
          <Tab text="Sign In" linkTo="/signin" />
        </ScrollView>
        
      </View>
    );
  };

export default AppBar;