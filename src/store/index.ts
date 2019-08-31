import AsyncStorage from '@react-native-community/async-storage';
import {init, RematchRootState} from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import updatedPlugin from '@rematch/updated';
import {composeWithDevTools} from 'redux-devtools-extension';
// models
import * as models from './models';

const updated = updatedPlugin();
// plugins
const loading = createLoadingPlugin({});
const immer = immerPlugin();

const persistPlugin = createRematchPersist({
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['feeds'],
  throttle: 5000,
  version: 1,
});

export const store = init({
  models,
  plugins: [loading, immer, updated, persistPlugin],
  redux: {
    enhancers: [composeWithDevTools()],
  },
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
