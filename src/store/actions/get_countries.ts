const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';

const getCountries = (payload: any) => {
  return {
    type: GET_COUNTRIES,
    payload,
  };
};

const getCountriesSuccess = (payload: any) => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    payload,
  };
};

const getCountriesFail = (payload: any) => {
  return {
    type: GET_COUNTRIES_FAIL,
    payload,
  };
};

export {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  getCountries,
  getCountriesSuccess,
  getCountriesFail,
};
