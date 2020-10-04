import React from 'react';
import { View, FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';
import { Text } from './Text';
import theme from '../theme';


const ItemSeparator = () => <View style={theme.separator} />;

const Review = ({ review }) => {
    const dateParts = review.createdAt.split('T');
    const date = dateParts[0];

    return (
        <View style={theme.ReviewCard}>
            <View style={theme.FlexRow}>
                <View style={theme.reviewScore}>
              <Text fontWeight="bold" style={theme.scoreText}>
                {review.rating}
              </Text>
              </View>
            <View style={theme.FlexColumn}>
              <Text fontWeight="bold" style={theme.Item}>
                {review.user.username}
              </Text>
              <Text color="textSecondary" style={theme.Item}>
                {date}
              </Text>
              <Text style={theme.reviewText}>
                {review.text}
              </Text>
            </View>
            </View>
        </View>
    );
};

const SingleRepository = ({ id }) => {
    const { repository } = useSingleRepository(id);
    
    const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    if (!repository){
        return <View></View>;
    }

    const renderItem = ({ item }) => (
        <Review review={item} />
    );
    
    return (
      <View>
        <RepositoryItem item={repository} singleView />
        <ItemSeparator />
        <FlatList
          data={reviewNodes}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={item => item.id}
        />
      </View>
    );
};

export default SingleRepository;