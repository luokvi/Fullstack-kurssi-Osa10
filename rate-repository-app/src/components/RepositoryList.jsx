import React from 'react';
import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';


const ItemSeparator = () => <View style={theme.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

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
    />
  );
};

export default RepositoryList;