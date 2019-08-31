import React, {useState} from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './store';

const App = () => {
  const [init, setInit] = useState(false);

  store.subscribe(() => {
    const state: any = store.getState();

    if (!init && state.lastAction.type == 'persist/REHYDRATE') {
      setInit(true);
    }
  });

  if (!init) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default React.memo(App);
