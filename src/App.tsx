import {getPersistor} from '@rematch/persist';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import {getInitialRoute} from './services/auth';
import {store} from './store';

const persistor = getPersistor();

class App extends React.PureComponent {
  state = {
    initialRoute: 'Splash',
  };

  async componentDidMount() {
    const route = await getInitialRoute();
    this.setState({initialRoute: route ? route : 'Intro'});
  }

  render() {
    const {initialRoute} = this.state;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Main initialRoute={initialRoute} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
