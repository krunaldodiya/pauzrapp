import produce from 'immer';
import authReducer from './auth';
import userReducer from './user';

const {combineReducers} = require('redux-immer');

const rootReducer = combineReducers(produce, {
  auth: authReducer,
  user: userReducer,
});

export {rootReducer};
