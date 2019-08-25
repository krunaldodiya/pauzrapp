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
import {Icon} from 'native-base';

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
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-people" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Two: {
      screen: Two,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-pause" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Three: {
      screen: Three,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-stats" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
    },
    initialRouteName: 'Two',
  }
);

const FocusStackNavigator = createStackNavigator(
  {
    Tabs: FocusTabs,
    Profile: ProfileContainer,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            type="SimpleLineIcons"
            name="menu"
            style={{marginLeft: 10, fontSize: 22}}
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: navigation.state.routes[navigation.state.index].routeName,
        headerRight: (
          <Icon
            type="SimpleLineIcons"
            name="bulb"
            style={{marginRight: 10, fontSize: 22}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  }
);

const Focus = createDrawerNavigator(
  {
    Main: FocusStackNavigator,
  },
  {
    contentComponent: DrawerMenu,
  }
);

export default createAppContainer(Focus);
