import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { capitalize } from '../helper';

const PokemonCard = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="font-weight-bold">
          {capitalize(props.title)}
        </CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
