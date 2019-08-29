import {call, put, takeEvery} from 'redux-saga/effects';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
import {GET_COUNTRIES, GET_COUNTRIES_FAIL, GET_COUNTRIES_SUCCESS} from '../actions';

function* getCountries() {
  try {
    const {data} = yield call(makeRequest, api.getCountries, {}, 'POST');
    const {countries} = data;

    yield put({
      type: GET_COUNTRIES_SUCCESS,
      payload: {countries},
    });
  } catch (error) {
    yield put({
      type: GET_COUNTRIES_FAIL,
      payload: {errors: error.response.data},
    });
  }
}

function* getCountriesWatcher() {
  yield takeEvery(GET_COUNTRIES, getCountries);
}

export {getCountriesWatcher};
