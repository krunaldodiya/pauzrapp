import React from 'react';
import {Provider} from 'react-redux';
// import Init from './Init';
import {store} from './store';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      {/* <Init /> */}
    </Provider>
  );
};

export default React.memo(App);
