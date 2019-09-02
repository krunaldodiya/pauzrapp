import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
interface QuoteState {
  quotes: [];
  tab: number;
  playing: boolean;
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: QuoteState = {
  quotes: [],
  tab: 0,
  playing: true,
  errors: null,
  loading: false,
  loaded: false,
};

export const quote = createModel({
  name: 'quote',
  state: initialState,
  reducers: {
    setState(state: QuoteState, payload: any) {
      return {...state, ...payload};
    },
    nextTab(state: QuoteState, payload: any) {
      if (!state.playing) return;

      const {tab, quotes} = state;
      const nextTab = tab < quotes.length - 1 ? tab + 1 : 0;

      return {...state, tab: nextTab};
    },
    previousTab(state: QuoteState, payload: any) {
      if (!state.playing) return;

      const {tab, quotes} = state;
      const previousTab = tab > 0 ? tab - 1 : quotes.length - 1;

      return {...state, tab: previousTab};
    },
  },
  effects: (dispatch: any) => {
    return {
      async getQuotes(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return;

        dispatch.quote.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getQuotes, payload, 'POST');
          const {quotes} = data;

          dispatch.quote.setState({loading: false, loaded: true, errors: null, quotes});
        } catch (error) {
          dispatch.quote.setState({
            loading: false,
            loaded: true,
            errors: error.response.data,
          });
        }
      },
    };
  },
});
