import {createStackNavigator} from 'react-navigation';
import EditProfile from './screens/edit_profile';
import Home from './screens/home';
import Intro from './screens/intro';
import NoInternet from './screens/no_internet';
import RequestOtp from './screens/request_otp';
import SelectCountry from './screens/select_country';
import Splash from './screens/splash';
import VerifyOtp from './screens/verify_otp';

const getAppNavigator = (
  initialRouteName: 'Splash' | 'Intro' | 'EditProfile' | 'Home' | 'NoInternet'
) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      Intro: {screen: Intro},
      RequestOtp: {screen: RequestOtp},
      VerifyOtp: {screen: VerifyOtp},
      Splash: {screen: Splash},
      SelectCountry: {screen: SelectCountry},
      EditProfile: {screen: EditProfile},
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

export default getAppNavigator;
