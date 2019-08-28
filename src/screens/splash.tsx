import React from 'react';
import {SafeAreaView, Text, View, StatusBar, ActivityIndicator} from 'react-native';

const Splash = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'blue'}}>
        <ActivityIndicator color="white" size="large" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Splash);
