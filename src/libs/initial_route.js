const getInitialRouteName = authUser => {
  if (authUser) {
    const {status} = authUser;

    if (status === 0) {
      return 'EditProfile';
    }

    return 'Home';
  }

  return 'Intro';
};

export default getInitialRouteName;
