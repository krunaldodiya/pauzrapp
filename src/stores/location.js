import { types, flow } from 'mobx-state-tree'; // A
import { api } from '../libs/api';
import Country from '../models/country';
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';

const LocationStore = types
  .model('LocationStore', {
    countries: types.array(Country),
    loading: false,
    errors: types.maybeNull(ValidationError),
  })
  .views(self => ({
    get countryList() {
      return self.countries.slice();
    },
  }))
  .actions(self => ({
    getCountryList: flow(function*() {
      self.loading = true;

      try {
        const { data } = yield makeRequest(api.getCountries);

        self.countries.push(...data['countries']);
        self.loading = false;
      } catch (error) {
        console.log(error);

        self.loading = false;
      }
    }),
  }))
  .create();

export default LocationStore;
