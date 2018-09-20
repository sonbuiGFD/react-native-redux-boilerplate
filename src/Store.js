import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './Reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
