import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuSelector from './MenuSelector';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBarMenu: {
    display: 'flex',
    justify: 'space-between',
  },
});

class NavigationBar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
  };

  render() {
    const { classes, onDrawerToggle } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Pokédex
          </Typography>
          <MenuSelector />
        </Toolbar>
      </AppBar>
    );
  }
} // NavigationBar

export default withStyles(styles)(NavigationBar);
