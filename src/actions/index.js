import { fetchPokemonInfoIfRequired, fetchPokemonsIfRequired } from './pokemon';

import { fetchBerriesIfRequired } from './berry';

/* FILTER LIST */
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

function filter(searchTerm) {
  return { type: SEARCH_TEXT, searchTerm: searchTerm };
}

function clearFilter() {
  return { type: CLEAR_SEARCH };
}

export {
  filter,
  clearFilter,
  fetchPokemonsIfRequired,
  fetchPokemonInfoIfRequired,
  fetchBerriesIfRequired,
};
