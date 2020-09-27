import React from 'react';
import { TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';


const Tab = ({ text, onPress, linkTo}) => {
    return (
      <TouchableWithoutFeedback>
        <Link to={linkTo} component={TouchableOpacity} activeOpacity={0.5} onPress={onPress}>
          <Text style={theme.appbartab}>
            {text}
          </Text>
        </Link>
      </TouchableWithoutFeedback>
    );
};

export default Tab;