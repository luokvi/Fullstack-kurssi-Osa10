import React from 'react';
import { View } from 'react-native';
import { Text, SubHeading } from './Text';

const Item = ({ item }) => (
        <View>
            <SubHeading fontWeight="bold">Full name: {item.fullName}</SubHeading>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
);

export default Item;