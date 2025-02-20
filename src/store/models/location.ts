import {createModel} from '@rematch/core';
import {api} from '../../libs/api';
import makeRequest from '../../services/make_request';

export type LocationState = {
  loading: boolean;
  loaded: boolean;
  errors: any;
  countries: any[];
  cities: any[];
};

const initialState: LocationState = {
  loading: false,
  loaded: false,
  errors: null,
  countries: [],
  cities: [],
};

export const location = createModel({
  name: 'location',
  state: initialState,
  reducers: {
    setState(state: LocationState, payload: any) {
      return {...state, ...payload};
    },
  },
  effects: (dispatch: any) => {
    return {
      async getCountries(payload: any, rootState: any) {
        if (!rootState.network.isInternetReachable) return;

        dispatch.location.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getCountries, payload, 'POST');
          const {countries} = data;

          dispatch.location.setState({loading: false, loaded: true, errors: null, countries});
        } catch (error) {
          const errors = error.response ? error.response.data : null;
          dispatch.location.setState({loading: false, loaded: true, errors});
        }
      },
    };
  },
});
