import {createModel} from '@rematch/core';

export const network = createModel({
  name: 'network',
  state: {},
  reducers: {
    changed(state: any, payload: any) {
      return {...state, ...payload};
    },
  },
});
