import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemonInfoIfRequired } from '../actions/pokemon';
import PokemonDetails from '../components/PokemonDetails';

class Pokemon extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPokemonInfoIfRequired(this.props.match.params.pokemon));
  }

  componentDidUpdate() {
    const name = this.props.match.params.pokemon;
    if (!this.props.pokemon[name]) {
      const { dispatch } = this.props;
      dispatch(fetchPokemonInfoIfRequired(this.props.match.params.pokemon));
    }
  }

  render() {
    const name = this.props.match.params.pokemon;
    const pokemon = this.props.pokemon[name]
      ? this.props.pokemon[name].data
      : false;

    return <PokemonDetails pokemon={pokemon} />;
  }
} // Pokemon

function mapStateToProps(state) {
  const pokemon = state.pokemonByName || { isFetching: true };
  return { pokemon };
}

export default connect(mapStateToProps)(Pokemon);
