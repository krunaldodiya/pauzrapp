import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface ScoreboardProps {
  navigation: NavigationScreenProp<any, any>;
}

const Scoreboard = (props: ScoreboardProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10, marginBottom: 10}}>
        <Text>Scoreboard</Text>
      </View>
    </View>
  );
};

export default React.memo(Scoreboard);
