import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import getAppNavigator from './Route';
import {getAuthUserSelector} from './store/selectors/auth_user';

const Main = (props: any) => {
  const dispatch = useDispatch();

  const online = useSelector((state: any) => state.network.isInternetReachable);
  const loaded = useSelector((state: any) => state.auth.loaded);
  const authUser = useSelector(getAuthUserSelector);

  useEffect(() => {
    dispatch({type: 'auth/getAuthUser', payload: null});
  }, []);

  const initialRouteName = getInitialRouteName(online, loaded, authUser);
  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
