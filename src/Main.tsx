import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getInitialRouteName from './libs/initial_route';
import getAppNavigator from './Route';

const Main = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'auth/getAuthUser', payload: null});
  }, []);

  const loaded = useSelector((state: any) => state.auth.loaded);
  const authUserId = useSelector((state: any) => state.auth.authUserId);
  const authUserStatus = useSelector((state: any) => state.auth.authUserStatus);

  const initialRouteName = getInitialRouteName(loaded, authUserId, authUserStatus);
  const AppNavigator = getAppNavigator(initialRouteName);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
