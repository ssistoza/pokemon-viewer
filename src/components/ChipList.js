import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class ChipList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.labels.map(label => (
          <Chip key={label} label={label} className={classes.chip} />
        ))}
      </div>
    );
  }
} // ChipList

export default withStyles(styles)(ChipList);
