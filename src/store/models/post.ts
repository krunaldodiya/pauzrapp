import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface PostState {
  posts: any;
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: PostState = {
  posts: {},
  errors: null,
  loading: false,
  loaded: false,
};

export const post = createModel({
  name: 'post',
  state: initialState,
  reducers: {
    setState(state: PostState, payload: any) {
      return {...state, ...payload};
    },
    setAuthUserSuccess(state: PostState, payload: any) {
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
