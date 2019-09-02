import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import {getPersistor} from '@rematch/persist';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import {store} from './store';

const persistor = getPersistor();

const NetworkGate = () => {
  const dispatch = useDispatch();

  const unsubscribe: NetInfoSubscription = NetInfo.addEventListener((state: any) => {
    dispatch({type: 'network/changed', payload: state});
  });

  useEffect(() => {
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return <Main />;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NetworkGate />
      </PersistGate>
    </Provider>
  );
};

export default React.memo(App);
