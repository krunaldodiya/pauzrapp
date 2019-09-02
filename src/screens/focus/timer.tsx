import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface TimerProps {
  navigation: NavigationScreenProp<any, any>;
}

const Timer = (props: TimerProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Timer</Text>
      </View>
    </View>
  );
};

export default React.memo(Timer);
