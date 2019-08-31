import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import updatedPlugin from '@rematch/updated';
// models
import * as models from './models';

const updated = updatedPlugin();
// plugins
const loading = createLoadingPlugin({});
const immer = immerPlugin(); // should be after persist plugin

const persistPlugin = createRematchPersist({
  version: 1,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['feeds'],
  throttle: 5000,
  debug: true,
});

export const store = init({
  models,
  plugins: [loading, updated, persistPlugin, immer],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
