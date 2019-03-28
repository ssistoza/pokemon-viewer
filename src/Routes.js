import React from 'react';

import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/" component={Pokemon} />
      </Router>
    );
  }
} // Routes

export default Routes;
