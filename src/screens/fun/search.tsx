import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface SearchProps {
  navigation: NavigationScreenProp<any, any>;
}

const Search = (props: SearchProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Search Users</Text>
      </View>
    </View>
  );
};

export default React.memo(Search);
