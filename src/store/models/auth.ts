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
    setAuthUser(state: AuthState, payload: any) {
      return {...state, ...payload};
    },
  },
  effects: (dispatch: RematchDispatch) => {
    return {
      async getAuthUser(payload: any, _rootState: AuthState) {
        try {
          const response = await makeRequest(api.me, payload, 'POST');
          const {data} = response;

          dispatch.auth.setAuthUser({authUser: data.user, errors: null});
        } catch (error) {
          dispatch.auth.setAuthUser({errors: error.response.data});
        }
      },
    };
  },
});
