import NetInfo from '@react-native-community/netinfo';
import {getPersistor} from '@rematch/persist';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import {store} from './store';

const NetworkGate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      dispatch({type: 'network/changed', payload: state});
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Main />;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <NetworkGate />
      </PersistGate>
    </Provider>
  );
};

export default React.memo(App);
