import { combineReducers } from 'redux';
// import BaseNavigation from '../Router';
import commonReducer from './commonReducer';

// navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),

export default combineReducers({
  commonReducer,
});
