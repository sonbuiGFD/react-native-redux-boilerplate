import { createStackNavigator, createAppContainer } from 'react-navigation';

import { UIkit } from './components';

const BaseNavigation = createStackNavigator(
  {
    UIkit: { screen: UIkit },
  },
  {
    headerMode: 'none',
    initialRouteName: 'UIkit',
  },
);

export default createAppContainer(BaseNavigation);
