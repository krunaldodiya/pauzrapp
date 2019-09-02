import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface PostState {
  loading: boolean;
  loaded: boolean;
  errors: null;
  posts: {};
  meta: {};
}

const initialState: PostState = {
  loading: false,
  loaded: false,
  errors: null,
  posts: {},
  meta: {},
};

export const post = createModel({
  name: 'post',
  state: initialState,
  reducers: {
    setState(state: PostState, payload: any) {
      return {...state, ...payload};
    },
    getPostsSuccess(state: PostState, payload: any) {
      state.posts = Object.assign(state.posts, mapKeys(payload.posts, 'id'));
      state.meta = payload.meta;
      state.errors = null;

      state.loading = false;
      state.loaded = true;

      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getPosts(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return;

        dispatch.post.setState({loading: true});

        const postData = {page: 1, user_id: rootState.auth.authUserId};

        try {
          const {data} = await makeRequest(api.getPosts, postData, 'POST');
          const {posts, meta} = data;

          dispatch.post.getPostsSuccess({posts, meta});
          return meta;
        } catch (error) {
          dispatch.post.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
