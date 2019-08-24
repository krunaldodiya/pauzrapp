const getInitialScreen = authUser => {
  if (authUser) {
    const {status} = authUser;

    if (status === 0) {
      return 'EditProfilePage';
    }

    return 'HomePage';
  }

  return 'IntroPage';
};

export default getInitialScreen;
