import produce from 'immer';
import authReducer from './auth';
import feedReducer from './feed';
import locationReducer from './location';
import otpReducer from './otp';
import postReducer from './post';
import userReducer from './user';

const {combineReducers} = require('redux-immer');

const rootReducer = combineReducers(produce, {
  lastAction: (state: any, action: any) => action,
  auth: authReducer,
  feed: feedReducer,
  location: locationReducer,
  otp: otpReducer,
  post: postReducer,
  user: userReducer,
});

export {rootReducer};
