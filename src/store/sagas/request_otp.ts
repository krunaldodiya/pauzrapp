import {Alert} from 'react-native';
import {call, put, takeEvery} from 'redux-saga/effects';

import {REQUEST_OTP, REQUEST_OTP_SUCCESS, REQUEST_OTP_FAIL} from '../actions';

import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

function* requestOtp(action: any) {
  const {mobile} = action.payload;

  try {
    const {data} = yield call(makeRequest, api.requestOtp, {mobile}, 'POST');

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
