import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import getAppNavigator from './Route';
import {getAuthUserSelector} from './store/selectors/auth_user';

const Main = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'auth/getAuthUser', payload: null});
  }, []);

  const loaded = useSelector((state: any) => state.auth.loaded);
  const authUserId = useSelector((state: any) => state.auth.authUserId);
  const authUser = useSelector(getAuthUserSelector);

  const initialRouteName = getInitialRouteName(loaded, authUserId, authUser);
  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
