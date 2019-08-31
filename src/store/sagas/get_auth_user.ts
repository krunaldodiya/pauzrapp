import {call, put, select, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
import {GET_AUTH_USER, GET_AUTH_USER_FAIL, GET_AUTH_USER_SUCCESS} from '../actions';

function* getAuthUser(action: any) {
  const online = yield select((state: any) => state.offline.online);

  if (!online) return;

  try {
    const {data} = yield call(makeRequest, api.me, {}, 'POST');
    const {user} = data;

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: {user},
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
