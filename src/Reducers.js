import update from 'react-addons-update';
import { combineReducers } from 'redux';
import { GLOGAL_ACTIONS } from './Actions';

const initialState = {
  ui: {
    connectionInfo: {
      type: 'wifi',
      effectiveType: 'unknown',
    },
  },
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case GLOGAL_ACTIONS.UPDATE_CONNECTION_INFO:
      return update(state, {
        ui: {
          connectionInfo: { $set: action.payload },
        },
      });
    default:
      return state;
  }
};

export default combineReducers({
  global,
});
