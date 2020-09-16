import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from './Text';
import theme from '../theme';

const Tab = ({ text, onPress}) => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={onPress}>
                <Text style={theme.appbartab} >{text}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Tab;