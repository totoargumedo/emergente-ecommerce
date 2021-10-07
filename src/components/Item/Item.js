import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

// LIBRERIAS
import "./Item.css";

const Item = ({ data }) => {
  return (
    <Card className="Item">
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src={
            data.img
              ? data.img
              : "https://firebasestorage.googleapis.com/v0/b/emergente-ecommerce.appspot.com/o/Monsters%2Fdefault%20monster.jpg?alt=media&token=39bd69bb-7366-4d2c-a5ca-185264b9c8af"
          }
        />
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{data.type}</Card.Meta>
        <Card.Description>
          {data.description
            ? data.description
            : "We have not found a description in this monster database, so here you have the official intro for them. \n D&D monsters give your hero a vast array of challenges to overcome. The sinister mind flayer is waiting patiently to eat your brains, while the gelatinous cube shambles through dungeons digesting nearly everything in its path. There's always a new threat. "}
        </Card.Description>
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
};

export default Item;
