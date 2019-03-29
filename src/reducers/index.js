import { combineReducers } from 'redux';
import { listOfPokemons, pokemonByName, searchText } from './pokemon';
import { listOfBerries } from './berry';

const rootReducer = combineReducers({
  listOfPokemons,
  pokemonByName,
  listOfBerries,
  searchText,
});

export default rootReducer;
