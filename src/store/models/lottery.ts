import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';
interface LotteryState {
  loading: boolean;
  loaded: boolean;
  errors: null;
  winners: {};
  meta: {};
}

const initialState: LotteryState = {
  loading: false,
  loaded: false,
  errors: null,
  winners: {},
  meta: {},
};

export const lottery = createModel({
  name: 'lottery',
  state: initialState,
  reducers: {
    setState(state: LotteryState, payload: any) {
      return {...state, ...payload};
    },
    getLotteryWinnersSuccess(state: LotteryState, payload: any) {
      state.winners = Object.assign(state.winners, mapKeys(payload.winners, 'id'));
      state.meta = payload.meta;
      state.errors = null;

      state.loading = false;
      state.loaded = true;

      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getLotteryWinners(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return;

        dispatch.lottery.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getLotteryWinners, payload, 'POST');
          const {winners, meta} = data;

          dispatch.lottery.getLotteryWinnersSuccess({winners, meta});
          return meta;
        } catch (error) {
          const errors = error.response ? error.response.data : null;
          dispatch.lottery.setState({loading: false, loaded: true, errors});
        }
      },
    };
  },
});
