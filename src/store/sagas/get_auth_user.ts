import {call, put, takeEvery} from 'redux-saga/effects';

import {GET_AUTH_USER, GET_AUTH_USER_SUCCESS, GET_AUTH_USER_FAIL} from '../actions';

import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

function* getAuthUser() {
  try {
    const {data} = yield call(makeRequest, api.me, {}, 'POST');
    const {user} = data;

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: {authUser: user},
    });
  } catch (error) {
    yield put({
      type: GET_AUTH_USER_FAIL,
      payload: {errors: error.response.data},
    });
  }
}

function* getAuthUserWatcher() {
  yield takeEvery(GET_AUTH_USER, getAuthUser);
}

export {getAuthUserWatcher};
