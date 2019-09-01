import {createModel} from '@rematch/core';

export type UserState = {
  loading: boolean;
  loaded: boolean;
  errors: any;
  users: any;
};

const intialState: UserState = {
  loading: false,
  loaded: false,
  errors: null,
  users: {},
};

export const user = createModel({
  name: 'user',
  state: intialState,
  reducers: {
    'auth/setAuthUserSuccess': (state: any, payload: any) => {
      state.users[payload.user.id] = payload.user;
      return state;
    },
  },
});
