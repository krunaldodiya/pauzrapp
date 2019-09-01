import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';

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
    'feed/getFeedsSuccess'(state: PostState, payload: any) {
      const {feeds} = payload;
      state.posts = Object.assign(state.posts, mapKeys(feeds, 'id'));
      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      //
    };
  },
});
