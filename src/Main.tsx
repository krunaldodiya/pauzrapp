import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useSelector} from 'react-redux';
import Auth from './Auth';
import Guest from './Guest';

const getStackNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Auth: {screen: Auth},
      Guest: {screen: Guest},
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

const Main = () => {
  const authUserId = useSelector((state: any) => state.auth.authUserId);
  const initialRouteName = authUserId ? 'Auth' : 'Guest';

  const AppNavigator = getStackNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
