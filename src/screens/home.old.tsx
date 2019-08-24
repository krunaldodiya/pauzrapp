import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

const dataFactory = () => {
  const array = [];

  for (let index = 0; index < 1000; index++) {
    array.push(index + 1);
  }

  return array;
};

const renderItem = (data: any) => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        marginBottom: 10,
        height: 300,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 22, color: 'red', textAlign: 'center'}}>test #{data.index + 1}</Text>
    </View>
  );
};

interface HomeProps {
  navigation: NavigationScreenProp<any, any>;
}

const Home = (props: HomeProps) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        initialNumToRender={5}
        data={dataFactory()}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Home;
