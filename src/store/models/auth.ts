import {createModel, RematchDispatch} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

export type AuthState = {
  loading: boolean;
  loaded: boolean;
  authUserId: number | null;
  errors: any;
};

const intialState: AuthState = {
  loading: false,
  loaded: false,
  authUserId: null,
  errors: null,
};

export const auth = createModel({
  name: 'auth',
  state: intialState,
  reducers: {
    setAuthUserLoading(state: AuthState, payload: any) {
      state.loading = payload.loading;
      return state;
    },
    setAuthUserSuccess(state: AuthState, payload: any) {
      state.errors = null;
      state.authUserId = payload.user.id;
      state.loading = false;
      state.loaded = true;
      return state;
    },
    setAuthUserFail(state: AuthState, payload: any) {
      state.loading = false;
      state.loaded = true;
      state.errors = payload.errors;
      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getAuthUser(payload: any, state: any) {
        dispatch.auth.setAuthUserLoading({loading: true});

        try {
          const {data} = await makeRequest(api.me, payload, 'POST');
          const {user} = data;

          dispatch.auth.setAuthUserSuccess({user});
        } catch (error) {
          dispatch.auth.setAuthUserFail({errors: error.response.data});
        }
      },
    };
  },
});
