import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useSelector} from 'react-redux';
import EditProfile from './screens/edit_profile';
import Home from './screens/home';

const getStackNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      EditProfile: {screen: EditProfile},
    },
    {
      initialRouteName,
      defaultNavigationOptions: () => {
        return {
          header: null,
        };
      },
    }
  );
};

const Auth = () => {
  const authUserStatus = useSelector((state: any) => state.auth.authUserStatus);
  const initialRouteName = authUserStatus == 1 ? 'Home' : 'EditProfile';

  const AppNavigator = getStackNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default Auth;
