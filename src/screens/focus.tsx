import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from '../components/Icon';
import Groups from './focus/groups';
import Scoreboard from './focus/scoreboard';
import Timer from './focus/timer';

const DrawerMenu = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <TouchableOpacity onPress={() => console.log(props)}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const FocusTabNavigator = createBottomTabNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="Ionicons" name="ios-people" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Timer: {
      screen: Timer,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="Ionicons" name="ios-pause" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Scoreboard: {
      screen: Scoreboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
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
    initialRouteName: 'Timer',
  }
);

const FocusStackNavigator = createStackNavigator(
  {
    FocusTabNavigator: FocusTabNavigator,
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

const FocusDrawerNavigator = createDrawerNavigator(
  {
    Main: FocusStackNavigator,
  },
  {
    contentComponent: DrawerMenu,
  }
);

export default FocusDrawerNavigator;
