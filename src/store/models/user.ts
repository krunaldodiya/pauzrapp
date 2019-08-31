import {createModel} from '@rematch/core';

export type UserState = {
  loading: boolean;
  loaded: boolean;
  users: any;
  errors: any;
};

const intialState: UserState = {
  loading: false,
  loaded: false,
  users: null,
  errors: null,
};

export const user = createModel({
  name: 'user',
  state: intialState,
  reducers: {
    'auth/setAuthUserSuccess': (state: any, payload: any) => {
      console.log('from subscription', payload);
    },
  },
});
