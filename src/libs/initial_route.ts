const getInitialRouteName = (authLoading: any, authUser: any) => {
  if (authLoading) {
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
