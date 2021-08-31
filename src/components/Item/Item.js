import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import img from "./image.png";
// LIBRERIAS
import "./Item.css";

export const Item = ({ data, url }) => (
  <Card className="Item">
    <Card.Content>
      <Image floated="right" size="mini" src="./image.png" />
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>{data.index}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="orange">
          AGREGAR
        </Button>
        <Button basic color="green" on="">
          MAS INFO
        </Button>
      </div>
    </Card.Content>
  </Card>
);

Item.defaultProps = {
  data: {
    image: img,
    name: "Loading...",
    index: "Loading...",
  },
};
