import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import PostContainer from '../containers/post';
import ProfileContainer from '../containers/profile';
import {Icon} from 'native-base';

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
});

const Fun = createStackNavigator(
  {
    Tabs: FunTabs,
    Profile: ProfileContainer,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: navigation.state.routes[navigation.state.index].routeName,
        headerRight: (
          <Icon
            type="SimpleLineIcons"
            name="camera"
            style={{marginRight: 10, fontSize: 22}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  }
);

export default createAppContainer(Fun);
