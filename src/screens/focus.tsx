import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  StackActions,
} from 'react-navigation';
import IntroContainer from '../containers/intro';
import ProfileContainer from '../containers/profile';

function Two(props: any) {
  return <View />;
}

function Three(props: any) {
  return <View />;
}

function goToProfile(props: any) {
  const pushAction = StackActions.push({
    routeName: 'Profile',
  });

  props.navigation.dispatch(pushAction);
}

function DrawerMenu(props: any) {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <TouchableOpacity onPress={() => goToProfile(props)}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const FocusTabs = createBottomTabNavigator(
  {
    Intro: {
      screen: IntroContainer,
    },
    Two: {
      screen: Two,
    },
    Three: {
      screen: Three,
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

const FocusStackNavigator = createStackNavigator({
  Tabs: FocusTabs,
  Profile: ProfileContainer,
});

const Focus = createDrawerNavigator(
  {
    Main: FocusStackNavigator,
  },
  {
    contentComponent: DrawerMenu,
  }
);

export default createAppContainer(Focus);
