import {createSelector} from 'reselect';

const authUserIdSelector = (state: any) => state.auth.authUserId;
const usersSelector = (state: any) => state.user.users;
const getAuthUser = (authUserId: number, users: any) => {
  return authUserId ? users[authUserId] : null;
};

export default createSelector(
  authUserIdSelector,
  usersSelector,
  getAuthUser
);
