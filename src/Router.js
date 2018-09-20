import { StackNavigator } from 'react-navigation';

import { UIkit } from './components';

const BaseNavigation = StackNavigator(
  {
    UIkit: { screen: UIkit },
  },
  {
    headerMode: 'none',
    initialRouteName: 'UIkit',
  },
);

export default BaseNavigation;
