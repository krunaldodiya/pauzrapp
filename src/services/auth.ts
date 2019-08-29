import {AsyncStorage} from 'react-native';

const AUTH_TOKEN_KEY = 'authToken';

const setAuthToken = async (value: any) => {
  return AsyncStorage.setItem(AUTH_TOKEN_KEY, value);
};

const getAuthToken = async () => {
  return AsyncStorage.getItem(AUTH_TOKEN_KEY);
};

const resetAuth = async () => {
  return AsyncStorage.multiRemove([AUTH_TOKEN_KEY]);
};

const resetAuthToken = async () => {
  return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
};

export {setAuthToken, getAuthToken, resetAuth, resetAuthToken};
