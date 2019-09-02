import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';
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
    getPostsSuccess(state: PostState, payload: any) {
      state.posts = Object.assign(state.posts, mapKeys(payload.posts, 'id'));
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

          dispatch.post.getPostsSuccess({posts});
          return meta;
        } catch (error) {
          dispatch.post.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
