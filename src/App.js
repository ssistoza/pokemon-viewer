import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import PokemonList from './container/PokemonList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Container fluid>
          <Route path="/" exact component={Layout} />
          <Route path="/pokemon" component={PokemonList} />
        </Container>
      </Router>
    );
  }
}

export default App;
