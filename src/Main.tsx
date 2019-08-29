import React, {useEffect} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import Home from './screens/home';
import Intro from './screens/intro';
import Post from './screens/post';
import RequestOtp from './screens/request_otp';
import Splash from './screens/splash';
import {getAuthUser} from './store/actions';
import SelectCountry from './screens/select_country';

const getAppNavigator = () => {
  const {authUserId, loading} = useSelector((state: any) => state.auth);
  const authUser = useSelector((state: any) => {
    return state.user.users.find((user: any) => user.id == authUserId);
  });

  return createStackNavigator(
    {
      Home: {screen: Home},
      Intro: {screen: Intro},
      Post: {screen: Post},
      RequestOtp: {screen: RequestOtp},
      Splash: {screen: Splash},
      SelectCountry: {screen: SelectCountry},
    },
    {
      initialRouteName: getInitialRouteName(loading, authUser),
      defaultNavigationOptions: () => {
        return {
          header: null,
        };
      },
    }
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser(null));
  }, []);

  const AppNavigator = getAppNavigator();
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
