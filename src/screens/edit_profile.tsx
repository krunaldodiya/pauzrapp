import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface EditProfileProps {
  navigation: NavigationScreenProp<any, any>;
}

const EditProfile = (props: EditProfileProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Edit Profile</Text>
      </View>
    </View>
  );
};

export default React.memo(EditProfile);
