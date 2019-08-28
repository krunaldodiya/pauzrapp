import {createSelector} from 'reselect';

const authSelector = (state: any) => state.auth;
const getAuthUserSelector = (authUser: any) => authUser.loading;

export default createSelector(
  authSelector,
  getAuthUserSelector
);
