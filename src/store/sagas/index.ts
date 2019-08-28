import {all} from 'redux-saga/effects';
import {getAuthUserWatcher} from './get_auth_user';
import {requestOtpWatcher} from './request_otp';

function* rootSaga() {
  yield all([getAuthUserWatcher(), requestOtpWatcher()]);
}

export {rootSaga};
