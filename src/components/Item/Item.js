import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

// LIBRERIAS
import "./Item.css";

// COMPONENTES
import { ItemCount } from "../ItemCount/ItemCount";
import ItemOptions from "../ItemOptions/ItemOptions";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

export const Item = ({ data, url }) => (
  <Card className="Item">
    <Card.Content>
      <Image floated="right" size="mini" src={data.image} />
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>{data.index}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ItemCount />
      <ItemOptions />
      <div className="ui two buttons">
        <Button basic color="orange">
          AGREGAR
        </Button>
        <Button basic color="green">
          MAS INFO
        </Button>
      </div>
      <ItemDetailContainer url={url} />
    </Card.Content>
  </Card>
);

Item.defaultProps = {
  data: {
    image: "./image.png",
    username: "Loading...",
    name: "Loading...",
    company: { catchPhase: "" },
  },
};
