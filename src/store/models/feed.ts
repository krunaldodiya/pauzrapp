import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface FeedState {
  feeds: any[];
  meta: {};
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: FeedState = {
  feeds: [],
  meta: {},
  errors: null,
  loading: false,
  loaded: false,
};

export const feed = createModel({
  name: 'feed',
  state: initialState,
  reducers: {
    setState(state: FeedState, payload: any) {
      return {...state, ...payload};
    },
    setAuthUserSuccess(state: FeedState, payload: any) {
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
