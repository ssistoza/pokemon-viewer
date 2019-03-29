import fetch from 'cross-fetch';

export const REQUEST_BERRIES = 'REQUEST_BERRIES';
export const RECEIVE_BERRIES = 'RECEIVE_BERRIES';

const requestBerries = () => ({ type: REQUEST_BERRIES });
const receiveBerries = json => ({
  type: RECEIVE_BERRIES,
  list: json.results,
  receivedAt: Date.now(),
});

const fetchBerries = () => {
  return dispatch => {
    dispatch(requestBerries());
    return fetch(`${process.env.REACT_APP_BERRY_URL}?limit=1000`)
      .then(response => response.json())
      .then(json => dispatch(receiveBerries(json)));
  };
};

export const fetchBerriesIfRequired = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.listOfBerries.isFetching || state.listOfBerries.data) {
      return Promise.resolve();
    }
    dispatch(fetchBerries());
  };
};

