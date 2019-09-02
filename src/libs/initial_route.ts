import User from '../models/user';

const getInitialRouteName = (loaded: boolean, authUserId: number, authUser: User) => {
  if (loaded) {
    if (!authUserId) {
      return 'Intro';
    }

    if (authUser) {
      if (authUser.status == 0) {
        return 'EditProfile';
      }

      return 'Home';
    }

    return 'Splash';
  }

  return 'Splash';
};

export default getInitialRouteName;
