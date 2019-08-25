import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from './store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: require('./containers/home').default},
    Intro: {screen: require('./containers/intro').default},
    Post: {screen: require('./containers/post').default},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => {
      return {
        header: null,
      };
    },
  }
);

class App extends React.PureComponent {
  render() {
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
