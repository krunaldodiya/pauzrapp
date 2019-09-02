import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface FeedState {
  feeds: number[];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: FeedState = {
  feeds: [],
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
    getFeedsSuccess(state: FeedState, payload: any) {
      const {feeds} = payload;
      const uniqueFeeds = feeds
        .filter((feed: any) => state.feeds.indexOf(feed.id) < 0)
        .map((feed: any) => feed.id);

      state.feeds.push(...uniqueFeeds);
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

          dispatch.feed.getFeedsSuccess({feeds});
          return meta;
        } catch (error) {
          dispatch.feed.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
