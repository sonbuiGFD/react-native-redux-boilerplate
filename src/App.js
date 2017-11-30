import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NetInfo, Text } from 'react-native';
import configureStore from './Store';
import BaseNavigation from './Router';

const getStateForAction = BaseNavigation.router.getStateForAction;

BaseNavigation.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }

  if (state && action.type === 'ReplacePreviousScreen') {
    const routes = state.routes.slice(0, state.routes.length - 2);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 2,
    };
  }

  return getStateForAction(action, state);
};

class App extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
      isConnected: false,
    };
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      this.setState({ isConnected });
    });

    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = (isConnected) => {
    this.setState({ 
      isConnected,
    });
  }
  
  render() {
    const { isLoading, isConnected } = this.state;
    if (isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <BaseNavigation screenProps={{ isConnected }} />
      </Provider>
    );
  }
}

export default App;
