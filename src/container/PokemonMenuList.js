import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { fetchPokemonsIfRequired } from '../actions';
import { capitalize } from '../helper';

class PokemonMenuList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPokemonsIfRequired());
  }

  render() {
    const { listing } = this.props;
    if (listing.isFetching || !listing.data) return <p>Fetching..</p>;
    return (
      <MenuList>
        {listing.data.map((i, iter) => (
          <MenuItem key={iter} component={Link} to={`/pokemon/${i.name}`}>
            {capitalize(i.name)}
          </MenuItem>
        ))}
      </MenuList>
    );
  }
}

function mapStateToProps(state) {
  const listing = state.listOfPokemons || { isFetching: true };
  const pokemon = state.pokemonByName || { isFetching: true };

  if (state.searchText && listing.data) {
    const filteredData = listing.data.filter(item =>
      item.name.toLowerCase().startsWith(state.searchText.toLowerCase())
    );

    return {
      listing: {
        isFetching: listing.isFetching,
        lastUpdated: listing.lastUpdated,
        data: filteredData,
      },
      pokemon,
    };
  }

  return { listing, pokemon };
}

export default connect(mapStateToProps)(PokemonMenuList);
