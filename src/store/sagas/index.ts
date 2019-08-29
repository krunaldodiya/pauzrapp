import {all} from 'redux-saga/effects';
import {getAuthUserWatcher} from './get_auth_user';
import {getCountriesWatcher} from './get_countries';
import {requestOtpWatcher} from './request_otp';

function* rootSaga() {
  yield all([getAuthUserWatcher(), requestOtpWatcher(), getCountriesWatcher()]);
}

export {rootSaga};
