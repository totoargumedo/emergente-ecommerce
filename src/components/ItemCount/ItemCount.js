import React from "react";

// LIBRERIAS
import { Button, Icon } from "semantic-ui-react";
import "./ItemCount.css";

export const ItemCount = ({ add, substract, quantity }) => {
  return (
    <div className="ItemCount">
      <Button animated onClick={substract} size="tiny">
        <Button.Content visible>-</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
        </Button.Content>
      </Button>
      <h4>{quantity}</h4>
      <Button animated onClick={add} size="tiny">
        <Button.Content visible>+</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  );
};
