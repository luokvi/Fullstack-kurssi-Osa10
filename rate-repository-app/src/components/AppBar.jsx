import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';



const AppBar = () => {
    return (
    <View style={theme.container}>
        <AppBarTab text="Repos"/>
        <AppBarTab text="Another link"/>
    </View>
    );
  };

export default AppBar;