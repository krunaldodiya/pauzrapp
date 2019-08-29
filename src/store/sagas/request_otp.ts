import {call, put, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
import {REQUEST_OTP, REQUEST_OTP_FAIL, REQUEST_OTP_SUCCESS} from '../actions';

function* requestOtp(action: any) {
  const {payload} = action;

  try {
    const {data} = yield call(makeRequest, api.requestOtp, payload, 'POST');

    yield put({
      type: REQUEST_OTP_SUCCESS,
      payload: {otp: data.otp},
    });
  } catch (error) {
    yield put({
      type: REQUEST_OTP_FAIL,
      payload: {errors: error.response.data},
    });
  }
}

function* requestOtpWatcher() {
  yield takeEvery(REQUEST_OTP, requestOtp);
}

export {requestOtpWatcher};
