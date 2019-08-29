import User from '../models/user';

const getInitialRouteName = (authLoaded: boolean, authUser: User) => {
  if (authLoaded && authUser) {
    if (authUser != null) {
      const {status} = authUser;

      if (status == 0) {
        return 'EditProfile';
      }

      return 'Home';
    }

    return 'Intro';
  }

  return 'Splash';
};

export default getInitialRouteName;
