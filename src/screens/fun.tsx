import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import PostContainer from '../containers/post';
import ProfileContainer from '../containers/profile';

function Two(props: any) {
  return <View />;
}

function Three(props: any) {
  return <View />;
}

function Four(props: any) {
  return <View />;
}

function Five(props: any) {
  return <View />;
}

const FunTabs = createBottomTabNavigator(
  {
    Intro: {
      screen: PostContainer,
    },
    Two: {
      screen: Two,
    },
    Three: {
      screen: Three,
    },
    Four: {
      screen: Four,
    },
    Five: {
      screen: Five,
    },
  },
  {
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  }
);

const Fun = createStackNavigator({
  Tabs: FunTabs,
  Profile: ProfileContainer,
});

export default createAppContainer(Fun);
