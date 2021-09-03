import React from "react";

// LIBRERIAS
import "./CartItem.css";
import { Button } from "semantic-ui-react";

const CartItem = ({ data, removeItem }) => {
  return (
    <div className="cartItem">
      <h3>{data.quantity}</h3>
      <p>{data.name}</p>
      <Button basic color="orange" onClick={removeItem}>
        Quitar
      </Button>
    </div>
  );
};

export default CartItem;
