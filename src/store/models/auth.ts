import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

export type AuthState = {
  loading: boolean;
  loaded: boolean;
  errors: any;
  authUserId: number | null;
};

const initialState: AuthState = {
  loading: false,
  loaded: false,
  errors: null,
  authUserId: null,
};

export const auth = createModel({
  name: 'auth',
  state: initialState,
  reducers: {
    setState(state: AuthState, payload: any) {
      return {...state, ...payload};
    },
    setAuthUserSuccess(state: AuthState, payload: any) {
      state.authUserId = payload.user.id;
      state.errors = null;
      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getAuthUser(payload: any, state: any) {
        dispatch.auth.setState({loading: true});

        try {
          const {data} = await makeRequest(api.me, payload, 'POST');
          const {user} = data;

          dispatch.auth.setAuthUserSuccess({user});
          dispatch.auth.setState({loading: false, loaded: true});
        } catch (error) {
          dispatch.auth.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
