import fetch from 'cross-fetch';

export const REQUEST_POKEMON_LIST = 'REQUEST_POKEMON_LIST';
export const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST';

/* GET POKEMON LIST */
function requestPokemonList() {
  return { type: REQUEST_POKEMON_LIST };
}

function receivePokemonList(json) {
  return {
    type: RECEIVE_POKEMON_LIST,
    list: json.results.map(i => i),
    receivedAt: Date.now(),
  };
}

// Thunk
function fetchPokemons() {
  return dispatch => {
    dispatch(requestPokemonList());
    return fetch(`${process.env.REACT_APP_POKEMON_URL}?limit=1000`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemonList(json)));
  };
}

export function fetchPokemonsIfRequired() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.listOfPokemons.isFetching || state.listOfPokemons.data) {
      return Promise.resolve();
    }
    dispatch(fetchPokemons());
  };
}

/* FILTER POKEMON LIST */
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export function filterPokemons(searchTerm) {
  return { type: SEARCH_POKEMON, searchPokemon: searchTerm };
}

/* GET POKEMON INFO */
export const REQUEST_POKEMOM = 'REQUEST_POKEMOM';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

function requestPokemon(pokemon) {
  return { type: REQUEST_POKEMOM, pokemon };
}

function receivePokemon(pokemon, json) {
  return { type: RECEIVE_POKEMON, pokemon, data: json, receivedAt: Date.now() };
}

function fetchPokemonInfo(pokemon) {
  return dispatch => {
    dispatch(requestPokemon(pokemon));
    return fetch(`${process.env.REACT_APP_POKEMON_URL}/${pokemon}`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemon(pokemon, json)));
  };
}

export function fetchPokemonInfoIfRequired(pokemonName) {
  return (dispatch, getState) => {
    const state = getState();
    if (
      state.pokemonByName[pokemonName] &&
      state.pokemonByName[pokemonName].isFetching
    ) {
      return Promise.resolve();
    }
    dispatch(fetchPokemonInfo(pokemonName));
  };
}
