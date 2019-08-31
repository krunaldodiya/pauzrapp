import {mapKeys} from 'lodash';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
import {GET_FEEDS, GET_FEEDS_FAIL, GET_FEEDS_SUCCESS} from '../actions';

function* getFeeds(action: any) {
  const online = yield select((state: any) => state.offline.online);

  if (!online) return;

  try {
    const {data} = yield call(makeRequest, api.getFeeds, {page: 1}, 'POST');
    const {feeds, meta} = data;

    yield put({
      type: GET_FEEDS_SUCCESS,
      payload: {feeds: mapKeys(feeds), meta},
    });
  } catch (error) {
    yield put({
      type: GET_FEEDS_FAIL,
      payload: {errors: error.response.data},
    });
  }
}

function* getFeedsWatcher() {
  yield takeEvery(GET_FEEDS, getFeeds);
}

export {getFeedsWatcher};
