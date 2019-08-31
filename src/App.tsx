import {getPersistor} from '@rematch/persist';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import store from './store';

const persistor = getPersistor();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default React.memo(App);
