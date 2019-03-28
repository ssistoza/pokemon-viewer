import {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  REQUEST_POKEMOM,
  RECEIVE_POKEMON,
} from '../actions/pokemon';

export const listOfPokemons = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_POKEMON_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        data: action.list,
      });
    default:
      return state;
  }
};

export const pokemonByName = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POKEMOM:
      return Object.assign({}, state, {
        [action.pokemon]: {
          isFetching: true,
        },
      });
    case RECEIVE_POKEMON:
      return Object.assign({}, state, {
        [action.pokemon]: {
          isFetching: false,
          lastUpdated: action.receivedAt,
          data: action.data,
        },
      });
    default:
      return state;
  }
};
