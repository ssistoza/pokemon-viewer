import { REQUEST_BERRIES, RECEIVE_BERRIES } from '../actions/berry';

export const listOfBerries = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_BERRIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_BERRIES:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        data: action.list,
      });
    default:
      return state;
  }
};
