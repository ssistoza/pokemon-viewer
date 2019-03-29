import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ChipList from './ChipList';
import { capitalize, prettify } from '../helper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const PokemonDetails = props => {
  const { pokemon, classes } = props;

  if (!pokemon) {
    return <span>fetching...</span>;
  }

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="headline">{capitalize(pokemon.name)}</Typography>
      <Typography variant="subheading">Abilities</Typography>
      <ChipList labels={pokemon.abilities.map(i => prettify(i.ability.name))} />
      <Typography variant="subheading">Types</Typography>
      <ChipList labels={pokemon.types.map(i => prettify(i.type.name))} />
      <Typography variant="subheading">Sprite</Typography>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}-sprite`} />
      <Typography variant="subheading">Possible Games</Typography>
      <ChipList labels={pokemon.abilities.map(i => prettify(i.ability.name))} />
    </Paper>
  );
};

export default withStyles(styles)(PokemonDetails);
