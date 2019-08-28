const VERIFY_OTP = 'VERIFY_OTP';
const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
const VERIFY_OTP_FAIL = 'VERIFY_OTP_FAIL';

const verifyOtp = (payload: any) => {
  return {
    type: VERIFY_OTP,
    payload,
  };
};

const verifyOtpSuccess = (payload: any) => {
  return {
    type: VERIFY_OTP_SUCCESS,
    payload,
  };
};

const verifyOtpFail = (payload: any) => {
  return {
    type: VERIFY_OTP_FAIL,
    payload,
  };
};

export {
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  verifyOtp,
  verifyOtpSuccess,
  verifyOtpFail,
};
