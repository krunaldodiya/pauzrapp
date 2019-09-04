import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
interface QuoteState {
  quotes: [];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: QuoteState = {
  quotes: [],
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
          const errors = error.response ? error.response.data : null;
          dispatch.quote.setState({loading: false, loaded: true, errors});
        }
      },
    };
  },
});
