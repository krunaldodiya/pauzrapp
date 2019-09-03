import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Intro from './screens/intro';
import RequestOtp from './screens/request_otp';
import SelectCountry from './screens/select_country';
import VerifyOtp from './screens/verify_otp';

const Guest = createStackNavigator(
  {
    Intro: {screen: Intro},
    SelectCountry: {screen: SelectCountry},
    RequestOtp: {screen: RequestOtp},
    VerifyOtp: {screen: VerifyOtp},
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: () => {
      return {
        header: null,
      };
    },
  }
);

export default React.memo(Guest);
