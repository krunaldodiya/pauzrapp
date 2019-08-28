import produce from 'immer';
import authReducer from './auth';
import otpReducer from './otp';
import userReducer from './user';

const {combineReducers} = require('redux-immer');

const rootReducer = combineReducers(produce, {
  auth: authReducer,
  otp: otpReducer,
  user: userReducer,
});

export {rootReducer};
