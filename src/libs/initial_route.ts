import User from '../models/user';

const getInitialRouteName = (authUser: User) => {
  if (authUser) {
    const {status} = authUser;

    if (status === false) {
      return 'EditProfile';
    }

    return 'Home';
  }

  return 'Intro';
};

export default getInitialRouteName;
