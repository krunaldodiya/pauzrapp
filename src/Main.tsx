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
import VerifyOtp from './screens/verify_otp';
import {getAuthUser} from './store/actions';

const getAppNavigator = (initialRouteName: 'Splash' | 'Intro' | 'EditProfile' | 'Home') => {
  console.log(initialRouteName);

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

  useEffect(() => {
    dispatch(getAuthUser(null));
  }, []);

  const {authUserId, loading} = useSelector((state: any) => state.auth);

  const authUser = useSelector((state: any) => {
    return state.user.users.find((user: any) => user.id == authUserId);
  });

  const initialRouteName = getInitialRouteName(loading, authUser);

  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
