import {createModel} from '@rematch/core';
import makeRequest from '../../services/make_request';
import {api} from '../../libs/api';

export type LocationState = {
  loading: boolean;
  loaded: boolean;
  countries: any[];
  cities: any[];
  errors: any;
};

const intialState: LocationState = {
  loading: false,
  loaded: false,
  countries: [],
  cities: [],
  errors: null,
};

export const location = createModel({
  name: 'location',
  state: intialState,
  reducers: {
    setCountriesLoading(state: LocationState, payload: any) {
      state.loading = payload.loading;
      return state;
    },
    setCountriesSuccess(state: LocationState, payload: any) {
      state.errors = null;
      state.countries = payload.countries;
      state.loading = false;
      state.loaded = true;
      return state;
    },
    setCountriesFail(state: LocationState, payload: any) {
      state.loading = false;
      state.loaded = true;
      state.errors = payload.errors;
      return state;
    },
  },
  effects: (dispatch: any) => {
    return {
      async getCountries(payload: any, state: any) {
        dispatch.location.setCountriesLoading({loading: true});

        try {
          const {data} = await makeRequest(api.getCountries, payload, 'POST');
          const {countries} = data;

          dispatch.location.setCountriesSuccess({countries});
        } catch (error) {
          dispatch.location.setCountriesFail({errors: error.response.data});
        }
      },
    };
  },
});
