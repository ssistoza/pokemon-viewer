import { combineReducers } from 'redux';
import { listOfPokemons, pokemonByName } from './pokemon';
import { SEARCH_TEXT, CLEAR_SEARCH } from '../actions';
import { listOfBerries } from './berry';

export const searchText = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return action.searchTerm;
    case CLEAR_SEARCH:
      return '';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  listOfPokemons,
  pokemonByName,
  listOfBerries,
  searchText,
});

export default rootReducer;
