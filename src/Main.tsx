import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {useDispatch} from 'react-redux';
import getStackNavigator from './Route';

const Main = (props: any) => {
  const {initialRoute} = props;
  const dispatch = useDispatch();

  const unsubscribe: NetInfoSubscription = NetInfo.addEventListener((state: any) => {
    dispatch({type: 'network/changed', payload: state});
  });

  useEffect(() => {
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const AppNavigator = getStackNavigator(initialRoute);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
