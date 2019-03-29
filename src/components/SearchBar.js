import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles, TextField } from '@material-ui/core';
import { compose } from 'recompose';
import { filterPokemons } from '../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Input extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    searchText: PropTypes.string,
  };

  handleInputChange = e => {
    const { dispatch } = this.props;
    dispatch(filterPokemons(e.target.value));
  };

  render() {
    const { classes, searchText } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-dense"
          label="Search"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          fullWidth
          onChange={this.handleInputChange}
          value={searchText}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  const searchText = state.searchText;
  return { searchText: searchText };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Input);
