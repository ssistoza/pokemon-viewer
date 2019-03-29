import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';

import { fetchBerriesIfRequired, clearFilter } from '../actions';
import { capitalize } from '../helper';

class BerryMenuList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBerriesIfRequired());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearFilter());
  }

  render() {
    const { listing } = this.props;

    if (listing.isFetching || !listing.data) return <p>Fetching..</p>;

    return (
      <MenuList>
        {listing.data.map(i => (
          <MenuItem key={i.name} component={Link} to={`/berry/${i.name}`}>
            {capitalize(i.name)}
          </MenuItem>
        ))}
      </MenuList>
    );
  }
}

function mapStateToProps(state) {
  const listing = state.listOfBerries || { isFetching: true };

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
    };
  }

  return { listing };
}

export default connect(mapStateToProps)(BerryMenuList);
