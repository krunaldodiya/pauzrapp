import React from 'react';
import {Provider} from 'react-redux';
import Init from './Init';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Init />
    </Provider>
  );
};

export default React.memo(App);
