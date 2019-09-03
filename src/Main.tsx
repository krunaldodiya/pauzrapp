import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
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
  const [initialRouteName, setInitialRouteName] = useState('Splash');

  AsyncStorage.getItem('authToken').then((authToken: any) => {
    return setInitialRouteName(authToken ? 'Auth' : 'Guest');
  });

  // const initialRouteName = authToken ? 'Auth' : 'Guest';
  // const authUserId = useSelector((state: any) => state.auth.authUserId);
  // const initialRouteName = authUserId ? 'Auth' : 'Guest';

  const AppNavigator = getStackNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
