import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonsIfRequired } from '../actions';

class PokemonList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPokemonsIfRequired());
  }

  render() {
    const { listing } = this.props;

    if (listing.isFetching || !listing.data) return <p>Fetching..</p>;
    return (
      <ul>
        {listing.data.map((i, iter) => (
          <li key={iter}>{i.name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const listing = state.listOfPokemons || { isFetching: true };
  const pokemon = state.pokemonByName || { isFetching: true };
  return { listing, pokemon };
}

export default connect(mapStateToProps)(PokemonList);
