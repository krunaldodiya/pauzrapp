const REQUEST_OTP = 'REQUEST_OTP';
const REQUEST_OTP_SUCCESS = 'REQUEST_OTP_SUCCESS';
const REQUEST_OTP_FAIL = 'REQUEST_OTP_FAIL';
const SET_COUNTRY = 'SET_COUNTRY';

const requestOtp = (payload: any) => {
  return {
    type: REQUEST_OTP,
    payload,
  };
};

const requestOtpSuccess = (payload: any) => {
  return {
    type: REQUEST_OTP_SUCCESS,
    payload,
  };
};

const requestOtpFail = (payload: any) => {
  return {
    type: REQUEST_OTP_FAIL,
    payload,
  };
};

const setCountry = (payload: any) => {
  return {
    type: SET_COUNTRY,
    payload,
  };
};

export {
  REQUEST_OTP,
  REQUEST_OTP_SUCCESS,
  REQUEST_OTP_FAIL,
  SET_COUNTRY,
  requestOtp,
  requestOtpSuccess,
  requestOtpFail,
  setCountry,
};
