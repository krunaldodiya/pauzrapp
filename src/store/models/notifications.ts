import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface NotificationState {
  feeds: number[];
  meta: {};
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: NotificationState = {
  feeds: [],
  meta: {},
  errors: null,
  loading: false,
  loaded: false,
};

export const notification = createModel({
  name: 'notification',
  state: initialState,
  reducers: {
    setState(state: NotificationState, payload: any) {
      return {...state, ...payload};
    },
    getLotteryWinnersSuccess(state: NotificationState, payload: any) {
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
      async getLotteryWinners(payload: any, state: any) {
        dispatch.feed.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getLotteryWinners, payload, 'POST');
          const {winners} = data;

          dispatch.feed.getLotteryWinnersSuccess({winners});
        } catch (error) {
          dispatch.feed.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
