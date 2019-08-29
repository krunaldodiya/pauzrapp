import Country from '../../models/country';
import {
  REQUEST_OTP,
  REQUEST_OTP_FAIL,
  REQUEST_OTP_SUCCESS,
  SET_COUNTRY,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
} from '../actions';

interface InitialState {
  mobile: number | null;
  clientOtp: number | null;
  serverOtp: number | null;
  country: Country | null;
  errors: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  mobile: null,
  clientOtp: null,
  serverOtp: null,
  country: null,
  errors: null,
  loading: false,
  loaded: false,
};

const otpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case REQUEST_OTP: {
      state.mobile = payload.mobile;
      state.loading = true;
      return state;
    }

    case REQUEST_OTP_SUCCESS: {
      state.serverOtp = payload.otp;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case REQUEST_OTP_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case VERIFY_OTP: {
      state.clientOtp = payload.otp;
      state.loading = true;
      state.loaded = false;
      return state;
    }

    case VERIFY_OTP_SUCCESS: {
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case VERIFY_OTP_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case SET_COUNTRY: {
      state.country = payload.country;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default otpReducer;
