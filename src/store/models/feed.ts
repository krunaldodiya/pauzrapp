import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
interface FeedState {
  loading: boolean;
  loaded: boolean;
  errors: null;
  feeds: {};
  meta: {};
}

const initialState: FeedState = {
  loading: false,
  loaded: false,
  errors: null,
  feeds: {},
  meta: {},
};

export const feed = createModel({
  name: 'feed',
  state: initialState,
  reducers: {
    setState(state: FeedState, payload: any) {
      return {...state, ...payload};
    },
    getFeedsSuccess(state: FeedState, payload: any) {
      state.feeds = Object.assign(state.feeds, mapKeys(payload.feeds, 'id'));
      state.meta = payload.meta;
      state.errors = null;

      state.loading = false;
      state.loaded = true;

      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getFeeds(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return;

        dispatch.feed.setState({loading: true});

        const postData = {page: 1, user_id: rootState.auth.authUserId};

        try {
          const {data} = await makeRequest(api.getFeeds, postData, 'POST');
          const {feeds, meta} = data;

          dispatch.feed.getFeedsSuccess({feeds, meta});
          return meta;
        } catch (error) {
          dispatch.feed.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
