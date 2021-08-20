import React from "react";

// LIBRERIAS
import { Button, Icon } from "semantic-ui-react";

export const ItemCount = () => {
  const [stockNumber, setStockNumber] = React.useState(0);
  const stockMax = 10;
  const addNumber = () => {
    if (stockNumber >= 0 && stockNumber <= stockMax - 1) {
      setStockNumber(stockNumber + 1);
    }
  };
  const substractNumber = () => {
    if (stockNumber >= 1 && stockNumber <= stockMax) {
      setStockNumber(stockNumber - 1);
    }
  };

  return (
    <div>
      <h3>Cantidad</h3>
      <Button animated onClick={substractNumber}>
        <Button.Content visible>-</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
        </Button.Content>
      </Button>
      <h4>{stockNumber}</h4>
      <Button animated onClick={addNumber}>
        <Button.Content visible>+</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  );
};
