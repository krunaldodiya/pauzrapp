import {
  REQUEST_OTP,
  REQUEST_OTP_FAIL,
  REQUEST_OTP_SUCCESS,
  VERIFY_OTP,
  VERIFY_OTP_FAIL,
  VERIFY_OTP_SUCCESS,
} from '../actions';
import Country from '../../models/country';

interface InitialState {
  mobile: number | null;
  otp: number | null;
  country: Country | null;
  errors: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  mobile: null,
  otp: null,
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
    }

    case REQUEST_OTP_SUCCESS: {
      state.otp = payload.otp;
      state.loading = false;
      state.loaded = true;
    }

    case REQUEST_OTP_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
    }

    case VERIFY_OTP: {
      state.otp = payload.otp;
      state.loading = true;
    }

    case VERIFY_OTP_SUCCESS: {
      state.otp = payload.otp;
      state.loading = false;
      state.loaded = true;
    }

    case VERIFY_OTP_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
    }

    default: {
      return state;
    }
  }
};

export default otpReducer;
