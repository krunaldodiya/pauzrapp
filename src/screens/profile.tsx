import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface ProfileProps {
  navigation: NavigationScreenProp<any, any>;
}

const Profile = (props: ProfileProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default React.memo(Profile);
