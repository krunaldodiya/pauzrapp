import getAuthUserSelector from '../store/selectors/auth_user';

const getInitialRouteName = (auth: any, user: any) => {
  const authUser = getAuthUserSelector({auth, user});

  if (auth.loading) {
    return 'Splash';
  }

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
