import User from '../../models/user';

const authData = (state: any) => {
  return {
    ...state.auth,
    authUser: state.user.users.find((user: User) => user.id == state.auth.authUserId),
  };
};

export default authData;
