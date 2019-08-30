import User from '../models/user';

const getInitialRouteName = (online: any, auth: any, authUser: User) => {
  const {loaded, authUserId} = auth;

  if (loaded) {
    if (!online && !authUserId) {
      return 'NoInternet';
    }

    if (authUserId) {
      if (authUser && authUser.status == 0) {
        return 'EditProfile';
      }

      return 'Home';
    }

    return 'Intro';
  }

  return 'Splash';
};

export default getInitialRouteName;
