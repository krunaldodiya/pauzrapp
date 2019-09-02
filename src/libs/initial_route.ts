import User from '../models/user';

const getInitialRouteName = (loaded: boolean, authUserId: number, authUser: User) => {
  if (loaded && authUserId) {
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
