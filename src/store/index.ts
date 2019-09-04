import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createRematchPersist from '@rematch/persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
// models
import * as models from './models';

// blacklist filters
const postBlacklist = createBlacklistFilter('post', ['meta']);
const feedBlacklist = createBlacklistFilter('feed', ['meta']);
const lotteryBlacklist = createBlacklistFilter('lottery', ['meta']);

// plugins
const persistPlugin = createRematchPersist({
  version: 1,
  key: 'root',
  storage: AsyncStorage,
  transforms: [postBlacklist, feedBlacklist, lotteryBlacklist],
  throttle: 5000,
  debug: true,
});

const immer = immerPlugin(); // should be after persist plugin

export const store = init({
  models,
  plugins: [persistPlugin, immer],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
