import {createModel} from '@rematch/core';
import {Alert} from 'react-native';
import {api} from '../../libs/api';
import Country from '../../models/country';
import {setAuthToken, setInitialRoute} from '../../services/auth';
import makeRequest from '../../services/make_request';

export type OtpState = {
  loading: boolean;
  loaded: boolean;
  errors: any;
  mobile: number | null;
  clientOtp: number | null;
  serverOtp: number | null;
  country: Country | null;
};

const initialState: OtpState = {
  loading: false,
  loaded: false,
  errors: null,
  mobile: null,
  clientOtp: null,
  serverOtp: null,
  country: null,
};

export const otp = createModel({
  name: 'otp',
  state: initialState,
  reducers: {
    setState(state: OtpState, payload: any) {
      return {...state, ...payload};
    },
    setCountry(state: OtpState, payload: any) {
      state.country = payload.country;
      return state;
    },
  },

  effects: (dispatch: any) => {
    return {
      async noNetwork() {
        return Alert.alert('No Network', 'Please, check your internet connection.');
      },

      async requestOtp(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return this.noNetwork();

        dispatch.otp.setState({loading: true, mobile: payload.mobile});

        try {
          const {data} = await makeRequest(api.requestOtp, payload, 'POST');
          const {otp} = data;

          dispatch.otp.setState({loading: false, loaded: true, errors: null, clientOtp: otp});

          return otp;
        } catch (error) {
          const errors = error.response ? error.response.data : null;
          dispatch.otp.setState({loading: false, loaded: true, errors});
        }
      },

      async verifyOtp(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return this.noNetwork();

        dispatch.otp.setState({loading: true, clientOtp: payload.otp});

        try {
          const {data} = await makeRequest(api.verifyOtp, payload, 'POST');
          const {user, access_token} = data;

          const initialRoute = user.status == 1 ? 'Home' : 'EditProfile';
          await setAuthToken(access_token);
          await setInitialRoute(initialRoute);

          dispatch.auth.setAuthUserSuccess({user});
          dispatch.otp.setState({loading: false, loaded: true, errors: null});

          return initialRoute;
        } catch (error) {
          const errors = error.response ? error.response.data : null;
          dispatch.otp.setState({loading: false, loaded: true, errors});
        }
      },
    };
  },
});
