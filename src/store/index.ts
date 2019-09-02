import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createRematchPersist from '@rematch/persist';
// models
import * as models from './models';

// plugins
const persistPlugin = createRematchPersist({
  version: 1,
  key: 'root',
  storage: AsyncStorage,
});

const immer = immerPlugin(); // should be after persist plugin

export const store = init({
  models,
  plugins: [persistPlugin, immer],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
