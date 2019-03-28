import { combineReducers } from 'redux';
import { listOfPokemons, pokemonByName } from './pokemon';

const rootReducer = combineReducers({ listOfPokemons, pokemonByName });

export default rootReducer;
