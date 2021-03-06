import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, SubHeading, LanguageTag } from './Text';
import LinkButton from './ExternalLinkButton';
import theme from '../theme';
import { useHistory } from 'react-router-native';

const Img = ({source}) => {
    return(
        <Image source={{uri: source}} style={{width: 50, height: 50, margin: 10}}/>
    );
};

const Info = ({ name, description, language }) => {
  return(
    <View style={theme.FlexColumn}>
      <SubHeading fontWeight="bold" style={theme.Item}>
          {name}
      </SubHeading>
      <Text color="textSecondary" style={theme.Item}>
          {description}
      </Text>
      <LanguageTag>
          {language}
      </LanguageTag>
    </View>
  );
};

const Counter = ({ number, label }) => {
  if(number > 1000){
      number /= 1000;
      number = number.toFixed(1);
      number = `${number}k`;
    }
  return(
    <View style={theme.Counter}>
      <Text fontWeight="bold">{number}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
    );
};

const Base = ({ item }) => {
  return(
    <View>
          <View style={theme.FlexRow}>
            <Img source={item.ownerAvatarUrl} style={theme.Item} />
            <Info name={item.fullName} description={item.description} language={item.language} style={theme.Item}/>
          </View>
          <View style={theme.CountersContainer}>
            <Counter number={item.stargazersCount} label={"Stars"}/>
            <Counter number={item.forksCount} label={"Forks"}/>
            <Counter number={item.reviewCount} label={"Reviews"}/>
            <Counter number={item.ratingAverage} label={"Rating"}/>
          </View>
    </View>
  );
};


const Item = ({ item, singleView }) => {
  const history = useHistory();

  function onPress () {
    const id = item.id;
    history.push(`/${id}`);
  }

  if (singleView){
    return (
      <View style={theme.RepositoryItemCard}>
          <Base item={item} />
            <LinkButton linkTo={item.url}>
              {"Open in GitHub"}
            </LinkButton>
        </View>
    );
  }

  return (
        <View style={theme.RepositoryItemCard}>
          <TouchableOpacity onPress={onPress}>
            <Base item={item} />
          </TouchableOpacity>
        </View>
  );
  };

export default Item;