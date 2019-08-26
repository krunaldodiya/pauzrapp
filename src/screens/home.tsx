import {createMaterialTopTabNavigator} from 'react-navigation';
import FocusContainer from '../containers/focus';
import FunContainer from '../containers/fun';

const Tabs = createMaterialTopTabNavigator(
  {
    Focus: FocusContainer,
    Fun: FunContainer,
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default Tabs;
