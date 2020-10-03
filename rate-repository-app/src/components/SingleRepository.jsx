import React from 'react';
import RepositoryItem from './RepositoryItem';

import useSingleRepository from '../hooks/useSingleRepository';
import { View } from 'react-native';

const SingleRepository = ({ id }) => {
    const { repository } = useSingleRepository(id);
    
    if (!repository){
        return <View></View>;
    }
    
    return (
        <RepositoryItem item={repository} singleView />
    );
};

export default SingleRepository;