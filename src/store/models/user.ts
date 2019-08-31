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

export const auth = createModel({
  name: 'user',
  state: intialState,
  reducers: {
    'auth/setAuthUser': (state: any, payload: any) => {
      console.log(payload);
    },
  },
});
