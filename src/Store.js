import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';

const middleWare = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
const configureStore = (onComplete) => {
  const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
  persistStore(store, { storage: AsyncStorage, debounce: 500 }, onComplete);
  return store;
};

export default configureStore;
