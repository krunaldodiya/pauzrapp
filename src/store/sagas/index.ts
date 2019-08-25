import {all} from 'redux-saga/effects';
import {getAuthUserWatcher} from './get_auth_user';

function* rootSaga() {
  yield all([getAuthUserWatcher()]);
}

export {rootSaga};
