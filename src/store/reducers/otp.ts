import {REQUEST_OTP, REQUEST_OTP_FAIL, REQUEST_OTP_SUCCESS} from '../actions';
import {VERIFY_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS} from '../actions/verify_otp';

const initialState = {
  mobile: null,
  otp: null,
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
      state.otp = payload.otp;
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
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case VERIFY_OTP_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case VERIFY_OTP_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default otpReducer;
