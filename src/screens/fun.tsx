import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from '../components/Icon';
import LotteryWinners from '../screens/lottery_winners';
import Post from '../screens/post';
import PublicProfile from './public_profile';

const FunTabNavigator = createBottomTabNavigator(
  {
    Feeds: {
      screen: Post,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="EvilIcons" name="camera" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Lottery: {
      screen: LotteryWinners,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="EvilIcons" name="trophy" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Profile: {
      screen: PublicProfile,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="EvilIcons" name="user" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Search: {
      screen: Post,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="EvilIcons" name="search" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Notifications: {
      screen: Post,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon type="EvilIcons" name="heart" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
    },
    initialRouteName: 'Profile',
  }
);

const FunStackNavigator = createStackNavigator(
  {
    FunTabNavigator: FunTabNavigator,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: navigation.state.routes[navigation.state.index].routeName,
        headerRight: (
          <Icon
            type="SimpleLineIcons"
            name="paper-plane"
            style={{marginRight: 10, fontSize: 22}}
            onPress={() => navigation.push('Profile')}
          />
        ),
      };
    },
  }
);

export default FunStackNavigator;
