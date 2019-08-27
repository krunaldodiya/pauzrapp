import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import Home from './screens/home';
import Intro from './screens/intro';
import Post from './screens/post';
import RequestOtp from './screens/request_otp';
import {store} from './store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Intro: {screen: Intro},
    Post: {screen: Post},
    RequestOtp: {screen: RequestOtp},
  },
  {
    initialRouteName: 'Intro',
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

export default React.memo(App);
