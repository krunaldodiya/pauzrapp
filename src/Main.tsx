import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import Home from './screens/home';
import Intro from './screens/intro';
import Post from './screens/post';
import RequestOtp from './screens/request_otp';
import getAuthUserSelector from './store/selectors/auth';

const getAppNavigator = (authUser: any) => {
  const initialRouteName = getInitialRouteName(authUser);

  return createStackNavigator(
    {
      Home: {screen: Home},
      Intro: {screen: Intro},
      Post: {screen: Post},
      RequestOtp: {screen: RequestOtp},
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
  const state = useSelector((state: any) => state);
  const authUser = getAuthUserSelector(state);

  const AppNavigator = getAppNavigator(authUser);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
