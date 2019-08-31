import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import selectorsPlugin from '@rematch/select';
// models
import * as models from './models';

// plugins
const persistPlugin = createRematchPersist({
  version: 1,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['feeds'],
  throttle: 5000,
  debug: true,
});

const immer = immerPlugin(); // should be after persist plugin
const loading = createLoadingPlugin({});
const select = selectorsPlugin();

export const store = init({
  models,
  plugins: [persistPlugin, immer, loading, select],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
