import React from 'react';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import IntroContainer from '../screens/intro';
import {SafeAreaView, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../components/Icon';

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
    Intro: {
      screen: IntroContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-people" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Two: {
      screen: IntroContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-pause" style={{color: tintColor, fontSize: 28}} />
        ),
      },
    },
    Three: {
      screen: IntroContainer,
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

export default React.memo(FocusDrawerNavigator);
