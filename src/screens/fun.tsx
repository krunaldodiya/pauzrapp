import {Icon} from 'native-base';
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
      screen: Two,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="trophy" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Three: {
      screen: Three,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="user" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Four: {
      screen: Four,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="search" style={{color: tintColor, fontSize: 36}} />
        ),
      },
    },
    Five: {
      screen: Five,
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
    initialRouteName: 'Three',
  }
);

const FunStatckNavigator = createStackNavigator(
  {
    Tabs: FunTabNavigator,
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
            name="paper-plane"
            style={{marginRight: 10, fontSize: 22}}
            onPress={() => navigation.push('Profile')}
          />
        ),
      };
    },
  }
);

class Fun extends React.PureComponent {
  render() {
    const FunApp = createAppContainer(FunStatckNavigator);
    return <FunApp />;
  }
}

export default Fun;
