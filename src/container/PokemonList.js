import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemonsIfRequired } from '../actions/pokemon';

class PokemonList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPokemonsIfRequired());
  }

  render() {
    const { listing } = this.props;

    if (listing.isFetching || !listing.data) return <p>Fetching..</p>;
    return (
      <Row>
        {listing.data.map((i, iter) => (
          <Col key={iter} xs={12} sm={6} md={4} lg={3} xl={2} className="pt-2">
            <PokemonCard title={i.name} />
          </Col>
        ))}
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const listing = state.listOfPokemons || { isFetching: true };
  const pokemon = state.pokemonByName || { isFetching: true };
  return { listing, pokemon };
}

export default connect(mapStateToProps)(PokemonList);
