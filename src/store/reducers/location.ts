import City from '../../models/city';
import Country from '../../models/country';
import {GET_COUNTRIES, GET_COUNTRIES_FAIL, GET_COUNTRIES_SUCCESS} from '../actions';

interface InitialState {
  countries: Country[];
  cities: City[];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  countries: [],
  cities: [],
  errors: null,
  loading: false,
  loaded: false,
};

const locationReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_COUNTRIES: {
      state.loading = true;
      return state;
    }

    case GET_COUNTRIES_SUCCESS: {
      state.countries = payload.countries;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case GET_COUNTRIES_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default locationReducer;
