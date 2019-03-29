import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, withStyles } from '@material-ui/core';

import PokemonList from './container/PokemonList';
import BerryMenuList from './container/BerryMenuList';
import Pokemon from './container/Pokemon';

import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <NavigationBar onDrawerToggle={this.handleDrawerToggle} />
          <Sidebar
            onDrawerToggle={this.handleDrawerToggle}
            mobileOpen={this.state.mobileOpen}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/" exact render={() => <h1>No Page Available</h1>} />
              <Route path="/pokemon" exact component={PokemonList} />
              <Route path="/pokemon/:pokemon" component={Pokemon} />
              <Route path="/berry" exact component={BerryMenuList} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
