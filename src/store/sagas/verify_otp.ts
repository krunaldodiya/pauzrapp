import {call, put, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
import {VERIFY_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS} from '../actions';

function* verifyOtp(action: any) {
  const {payload} = action;

  try {
    const {data} = yield call(makeRequest, api.verifyOtp, payload, 'POST');

    yield put({
      type: VERIFY_OTP_SUCCESS,
      payload: {otp: data.otp},
    });
  } catch (error) {
    yield put({
      type: VERIFY_OTP_FAIL,
      payload: {errors: error.response.data},
    });
  }
}

function* verifyOtpWatcher() {
  yield takeEvery(VERIFY_OTP, verifyOtp);
}

export {verifyOtpWatcher};
