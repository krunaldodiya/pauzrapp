import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
// models
import * as models from './models';

// blacklist filters
const postBlacklist = createBlacklistFilter('post', ['meta']);
const feedBlacklist = createBlacklistFilter('feed', ['meta']);
const lotteryBlacklist = createBlacklistFilter('lottery', ['meta']);

// see options API below
const loading = createLoadingPlugin({});

// plugins
const persistPlugin = createRematchPersist({
  storage: AsyncStorage,
  transforms: [postBlacklist, feedBlacklist, lotteryBlacklist],
});

const immer = immerPlugin(); // should be after persist plugin

export const store = init({
  models,
  plugins: [loading, persistPlugin, immer],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
