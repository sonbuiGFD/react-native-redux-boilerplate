import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from 'native-base';

import configureStore from './Store';
import BaseNavigation from './Router';
import { ConnectNetInfo } from './components';

const { persistor, store } = configureStore();

Text.defaultProps.allowFontScaling = false;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Container style={{ position: 'relative' }}>
        <ConnectNetInfo />
        <BaseNavigation />
      </Container>
    </PersistGate>
  </Provider>
);

export default App;
