import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Hidden, Divider, Drawer, withStyles } from '@material-ui/core';
import SearchBar from './SearchBar';
import PokemonMenuList from '../container/PokemonMenuList';
import BerryMenuList from '../container/BerryMenuList';

const drawerWidth = 240;
const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
});

class Sidebar extends React.Component {
  state = {};

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
  };

  renderDrawerMenu() {
    const { classes } = this.props;

    return (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <SearchBar />
        <Divider />
        <Switch>
          <Route path="/" exact render={() => <h1>No Menu Available</h1>} />
          <Route path="/pokemon" component={PokemonMenuList} />
          <Route path="/berry" component={BerryMenuList} />
        </Switch>
      </div>
    );
  }

  render() {
    const { classes, onDrawerToggle, mobileOpen, container } = this.props;
    const drawer = this.renderDrawerMenu();

    return (
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={onDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
} // Sidebar

export default withStyles(styles)(Sidebar);
