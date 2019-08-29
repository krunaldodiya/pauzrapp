import {all} from 'redux-saga/effects';
import {getAuthUserWatcher} from './get_auth_user';
import {getCountriesWatcher} from './get_countries';
import {requestOtpWatcher} from './request_otp';
import {verifyOtpWatcher} from './verify_otp';

function* rootSaga() {
  yield all([getAuthUserWatcher(), getCountriesWatcher(), requestOtpWatcher(), verifyOtpWatcher()]);
}

export {rootSaga};
