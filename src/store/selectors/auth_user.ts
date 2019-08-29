import {createSelector} from 'reselect';
import User from '../../models/user';

const authSelector = (state: any) => state.auth.authUserId;
const userListSelector = (state: any) => state.user.users;

const getAuthUserSelector = (authUserId: number, users: User[]) => {
  return users.find((user: User) => user.id == authUserId);
};

export default createSelector(
  authSelector,
  userListSelector,
  getAuthUserSelector
);
