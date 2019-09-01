import {createModel} from '@rematch/core';
import {Country} from '../interfaces/country';
import makeRequest from '../../services/make_request';
import {api} from '../../libs/api';
import {setAuthToken} from '../../services/auth';

export type OtpState = {
  loading: boolean;
  loaded: boolean;
  mobile: number | null;
  clientOtp: number | null;
  serverOtp: number | null;
  country: Country | null;
  errors: any;
};

const intialState: OtpState = {
  loading: false,
  loaded: false,
  mobile: null,
  clientOtp: null,
  serverOtp: null,
  country: null,
  errors: null,
};

export const otp = createModel({
  name: 'otp',
  state: intialState,
  reducers: {
    setCountry(state: OtpState, payload: any) {
      state.country = payload.country;
      return state;
    },
    setState(state: OtpState, payload: any) {
      return {...state, ...payload};
    },
    setRequestOtpSuccess(state: OtpState, payload: any) {
      state.serverOtp = payload.otp;
      state.errors = null;
      state.loading = false;
      state.loaded = true;
      return state;
    },
    setVerifyOtpSuccess(state: OtpState, payload: any) {
      state.errors = null;
      state.loading = false;
      state.loaded = true;
      return state;
    },
  },

  effects: (dispatch: any) => {
    return {
      async requestOtp(payload: any, state: any) {
        dispatch.otp.setState({loading: true, mobile: payload.mobile});

        try {
          const {data} = await makeRequest(api.requestOtp, payload, 'POST');
          const {otp} = data;

          dispatch.otp.setState({otp});
        } catch (error) {
          dispatch.otp.setState({errors: error.response.data});
        }
      },

      async verifyOtp(payload: any, state: any) {
        dispatch.otp.setState({loading: true, clientOtp: payload.otp});

        try {
          const {data} = await makeRequest(api.verifyOtp, payload, 'POST');
          const {user, access_token} = data;

          await setAuthToken(access_token);
          dispatch.otp.setState({user});
        } catch (error) {
          dispatch.otp.setState({errors: error.response.data});
        }
      },
    };
  },
});
