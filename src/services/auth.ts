import AsyncStorage from '@react-native-community/async-storage';

const AUTH_TOKEN_KEY = 'authToken';

const INITIAL_ROUTE_KEY = 'initialRoute';

const setAuthToken = async (value: any) => {
  return AsyncStorage.setItem(AUTH_TOKEN_KEY, value);
};

const getAuthToken = async () => {
  return AsyncStorage.getItem(AUTH_TOKEN_KEY);
};

const resetAuthToken = async () => {
  return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
};

const setInitialRoute = async (value: any) => {
  return AsyncStorage.setItem(INITIAL_ROUTE_KEY, value);
};

const getInitialRoute = async () => {
  return AsyncStorage.getItem(INITIAL_ROUTE_KEY);
};

const resetInitialRoute = async () => {
  return AsyncStorage.removeItem(INITIAL_ROUTE_KEY);
};

const resetAuth = async () => {
  return AsyncStorage.multiRemove([AUTH_TOKEN_KEY, INITIAL_ROUTE_KEY]);
};

export {
  setAuthToken,
  getAuthToken,
  resetAuthToken,
  setInitialRoute,
  getInitialRoute,
  resetInitialRoute,
  resetAuth,
};
