import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface NoInternetProps {
  navigation: NavigationScreenProp<any, any>;
}

const NoInternet = (props: NoInternetProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 26}}>No Internet</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(NoInternet);
