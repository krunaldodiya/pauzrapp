import {createModel} from '@rematch/core';
import {mapKeys} from 'lodash';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

interface LotteryState {
  winners: any;
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: LotteryState = {
  winners: {},
  errors: null,
  loading: false,
  loaded: false,
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
      state.errors = null;

      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getLotteryWinners(payload: any, state: any) {
        dispatch.lottery.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getLotteryWinners, payload, 'POST');
          const {winners, meta} = data;

          dispatch.lottery.getLotteryWinnersSuccess({winners});
          return meta;
        } catch (error) {
          dispatch.lottery.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
