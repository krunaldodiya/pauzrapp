import getAuthUserSelector from '../store/selectors/auth_user';
import getAuthUserLoadingSelector from '../store/selectors/auth_user_loading';

const getInitialRouteName = (state: any) => {
  const authUser = getAuthUserSelector(state);
  const authUserLoading = getAuthUserLoadingSelector(state);

  if (authUserLoading) {
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
