import User from '../models/user';

const getInitialRouteName = (authLoading: boolean, authUser: User) => {
  if (authLoading) {
    return 'Splash';
  }

  if (authUser) {
    const {status} = authUser;

    if (status == 0) {
      return 'EditProfile';
    }

    return 'Home';
  }

  return 'Intro';
};

export default getInitialRouteName;
