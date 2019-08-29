import produce from 'immer';
import authReducer from './auth';
import locationReducer from './location';
import otpReducer from './otp';
import userReducer from './user';

const {combineReducers} = require('redux-immer');

const rootReducer = combineReducers(produce, {
  auth: authReducer,
  location: locationReducer,
  otp: otpReducer,
  user: userReducer,
});

export {rootReducer};
