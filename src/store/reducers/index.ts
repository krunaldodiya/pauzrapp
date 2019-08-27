import produce from 'immer';
import {combineReducers} from 'redux-immer';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers(produce, {
  auth: authReducer,
  user: userReducer,
});

export {rootReducer};
