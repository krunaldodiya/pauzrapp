import {call, put, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import {setAuthToken} from '../../services/auth';
import makeRequest from '../../services/make_request';
import {
  GET_AUTH_USER_SUCCESS,
  SET_USER,
  VERIFY_OTP,
  VERIFY_OTP_FAIL,
  VERIFY_OTP_SUCCESS,
} from '../actions';

function* verifyOtp(action: any) {
  const {payload} = action;

  try {
    const {data} = yield call(makeRequest, api.verifyOtp, payload, 'POST');
    const {user, access_token} = data;

    yield call(setAuthToken, access_token);

    yield put({
      type: VERIFY_OTP_SUCCESS,
      payload: {},
    });

    yield put({
      type: SET_USER,
      payload: {user},
    });

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: {user},
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
