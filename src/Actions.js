export const GLOGAL_ACTIONS = {
  UPDATE_CONNECTION_INFO: 'UPDATE_CONNECTION_INFO',
};

export const updateConnectionInfo = payload => (dispatch) => {
  dispatch({
    type: GLOGAL_ACTIONS.UPDATE_CONNECTION_INFO,
    payload,
  });
};
