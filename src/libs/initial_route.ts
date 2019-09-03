const getInitialRouteName = (loaded: boolean, authUserId: number, authUserStatus: number) => {
  if (loaded) {
    if (authUserId) {
      if (authUserStatus == 1) {
        return 'Home';
      }

      return 'EditProfile';
    }

    return 'Intro';
  }

  return 'Splash';
};

export default getInitialRouteName;
