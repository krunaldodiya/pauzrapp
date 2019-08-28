import React from 'react';
import {SafeAreaView, Text, View, StatusBar, ActivityIndicator} from 'react-native';

const Splash = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <ActivityIndicator color="white" size="large" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Splash);
