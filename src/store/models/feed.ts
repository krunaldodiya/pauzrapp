import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface FeedState {
  feeds: number[];
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
    sortByIdDesc(oldFeed: number, newFeed: number) {
      return newFeed - oldFeed;
    },
    sortByIdAsc(oldFeed: number, newFeed: number) {
      return oldFeed - newFeed;
    },
    getFeedsSuccess(state: FeedState, payload: any) {
      const {feeds, meta} = payload;
      const uniqueFeeds = feeds
        .filter((feed: any) => state.feeds.indexOf(feed.id) < 0)
        .map((feed: any) => feed.id);

      state.feeds.push(...uniqueFeeds);
      state.meta = meta;
      state.errors = null;

      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getFeeds(payload: any, state: any) {
        dispatch.feed.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getFeeds, payload, 'POST');
          const {feeds, meta} = data;

          dispatch.feed.getFeedsSuccess({feeds, meta});
        } catch (error) {
          dispatch.feed.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
