import {createSelector} from 'reselect';
import User from '../../models/user';

const userNameSelector = (state: any) => state.name;
const userListSelector = (state: any) => state.users;

const getAuthUser = (name: string, users: User[]) => {
  return users.find((user: User) => user.name == name);
};

export default createSelector(
  userNameSelector,
  userListSelector,
  getAuthUser
);
