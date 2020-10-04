import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';


const ItemSeparator = () => <View style={theme.separator} />;



const RepositoryList = () => {
  const [order, setOrder] = useState(['CREATED_AT', 'DESC']);
  const { repositories, refetch } = useRepositories(order);

  const OrderSelection = () => {
    return(
      <View style={theme.orderSelection}>
        <RNPickerSelect
          onValueChange={(value) => {
            let newOrder;
            switch(value) {
              case 'latest':
                newOrder = ['CREATED_AT', 'DESC'];
                break;
              case 'highest':
                newOrder = ['RATING_AVERAGE', 'DESC'];
                break;
              case 'lowest':
                newOrder = ['RATING_AVERAGE', 'ASC'];
                break;
              default :
                newOrder = ['CREATED_AT', 'DESC'];
                break;
            }

            setOrder(newOrder);
            refetch();
          }}

          items={[
            { label: 'Latest repositories', value: 'latest'},
            { label: 'Highest rated repositories', value: 'highest' },
            { label: 'Lowest rated repositories', value: 'lowest' },
          ]}
        />
      </View>
    );
  };

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
      <RepositoryItem item={item} />
  );

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      ListHeaderComponent={OrderSelection}
    />
  );
};

export default RepositoryList;