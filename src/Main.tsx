import React, {useEffect} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import EditProfile from './screens/edit_profile';
import Home from './screens/home';
import Intro from './screens/intro';
import NoInternet from './screens/no_internet';
import Post from './screens/post';
import RequestOtp from './screens/request_otp';
import SelectCountry from './screens/select_country';
import Splash from './screens/splash';
import Timer from './screens/timer';
import VerifyOtp from './screens/verify_otp';
import {getAuthUser} from './store/actions';

const getAppNavigator = (
  initialRouteName: 'Splash' | 'Intro' | 'EditProfile' | 'Home' | 'NoInternet'
) => {
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
      NoInternet: {screen: NoInternet},
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

  const {online, netInfo} = useSelector((state: any) => state.offline);
  const auth = useSelector((state: any) => state.auth);
  const authUser = useSelector((state: any) => {
    return auth.authUserId
      ? state.user.users.find((user: any) => user.id == auth.authUserId)
      : null;
  });

  useEffect(() => {
    online && dispatch(getAuthUser(null));
  }, []);

  const initialRouteName = getInitialRouteName(online, auth, authUser);
  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  if (netInfo.reach == 'NONE') {
    return null;
  }

  return <AppContainer />;
};

export default React.memo(Main);
