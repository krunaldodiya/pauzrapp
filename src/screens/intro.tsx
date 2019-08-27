import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface IntroProps {
  navigation: NavigationScreenProp<any, any>;
}

const Intro = (props: IntroProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>I'm an intro, you can skip me too.</Text>
      </View>

      <View style={{padding: 10}}>
        <Button title="skip" onPress={() => props.navigation.replace('Home')} />
      </View>
    </View>
  );
};

export default React.memo(Intro);
