import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from './store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: require('./screens/home').default},
    Intro: {screen: require('./screens/intro').default},
    Post: {screen: require('./containers/post').default},
  },
  {
    initialRouteName: 'Post',
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
