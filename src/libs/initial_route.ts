import User from '../models/user';

const getInitialRouteName = (online: any, loaded: boolean, authUser: User) => {
  if (loaded) {
    if (!online && !authUser) {
      return 'NoInternet';
    }

    if (authUser) {
      if (authUser.status == 0) {
        return 'EditProfile';
      }

      return 'Home';
    }

    return 'Intro';
  }

  return 'Splash';
};

export default getInitialRouteName;
