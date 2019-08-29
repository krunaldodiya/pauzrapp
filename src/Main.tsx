import React, {useEffect} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import EditProfile from './screens/edit_profile';
import Home from './screens/home';
import Intro from './screens/intro';
import Post from './screens/post';
import RequestOtp from './screens/request_otp';
import SelectCountry from './screens/select_country';
import Splash from './screens/splash';
import Timer from './screens/timer';
import VerifyOtp from './screens/verify_otp';
import {getAuthUser} from './store/actions';

const getAppNavigator = (initialRouteName: 'Splash' | 'Intro' | 'EditProfile' | 'Home') => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      Intro: {screen: Intro},
      Post: {screen: Post},
      RequestOtp: {screen: RequestOtp},
      VerifyOtp: {screen: VerifyOtp},
      Splash: {screen: Splash},
      SelectCountry: {screen: SelectCountry},
      EditProfile: {screen: EditProfile},
      Timer: {screen: Timer},
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
  const dispatch = useDispatch();
  const {authUserId, loaded} = useSelector((state: any) => state.auth);
  const authUser = useSelector((state: any) => {
    const userIndex = state.user.users.findIndex((user: any) => user.id == authUserId);
    return authUserId && userIndex >= 0 ? state.user.users[userIndex] : null;
  });

  useEffect(() => {
    dispatch(getAuthUser(null));
  }, []);

  const initialRouteName = getInitialRouteName(loaded, authUser);
  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default Main;
