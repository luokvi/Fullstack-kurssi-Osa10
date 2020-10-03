import React from 'react';
import * as Linking from 'expo-linking';
import { Text } from './Text';
import theme from '../theme';

const LinkButton = ({ linkTo, ...props }) => {
    const openLink = () => {
        Linking.openURL(linkTo);
    };

    return (
      <Text style={theme.SubmitButton} {...props} onPress={openLink}/>
    );
  };
  
export default LinkButton;