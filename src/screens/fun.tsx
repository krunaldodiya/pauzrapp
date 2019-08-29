import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import PostContainer from '../screens/post';
import Icon from '../components/Icon';

const FunTabNavigator = createBottomTabNavigator(
  {
    Intro: {
      screen: PostContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="camera" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Two: {
      screen: PostContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="trophy" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Three: {
      screen: PostContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="user" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Four: {
      screen: PostContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="search" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Five: {
      screen: PostContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
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
    initialRouteName: 'Two',
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

export default React.memo(FunStackNavigator);
