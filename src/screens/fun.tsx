import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import IntroContainer from '../containers/intro';
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

const FunTabs = createBottomTabNavigator({
  Intro: {
    screen: IntroContainer,
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
});

const Fun = createStackNavigator({
  Tabs: FunTabs,
  Profile: ProfileContainer,
});

export default createAppContainer(Fun);
