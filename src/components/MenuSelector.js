import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';

class MenuSelector extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/pokemon">
            Pokémon
          </MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/berry">
            Berries
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Cities</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
} // MenuSelector

export default MenuSelector;
