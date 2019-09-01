import {createModel} from '@rematch/core';
import makeRequest from '../../services/make_request';
import {api} from '../../libs/api';

export type LocationState = {
  loading: boolean;
  loaded: boolean;
  errors: any;
  countries: any[];
  cities: any[];
};

const intialState: LocationState = {
  loading: false,
  loaded: false,
  errors: null,
  countries: [],
  cities: [],
};

export const location = createModel({
  name: 'location',
  state: intialState,
  reducers: {
    setState(state: LocationState, payload: any) {
      return {...state, ...payload};
    },
  },
  effects: (dispatch: any) => {
    return {
      async getCountries(payload: any, state: any) {
        dispatch.location.setState({loading: true});

        try {
          const {data} = await makeRequest(api.getCountries, payload, 'POST');
          const {countries} = data;

          dispatch.location.setState({loading: false, loaded: true, errors: null, countries});
        } catch (error) {
          dispatch.location.setState({loading: false, loaded: true, errors: error.response.data});
        }
      },
    };
  },
});
