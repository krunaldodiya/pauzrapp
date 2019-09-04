import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface GroupsProps {
  navigation: NavigationScreenProp<any, any>;
}

const Groups = (props: GroupsProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Groups</Text>
      </View>
    </View>
  );
};

export default React.memo(Groups);
