import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useDispatch} from 'react-redux';

interface PublicProfileProps {
  navigation: NavigationScreenProp<any, any>;
}

const PublicProfile = (props: PublicProfileProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'post/getPosts', payload: {}});
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(PublicProfile);
