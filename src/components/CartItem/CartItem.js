import React from "react";

// LIBRERIAS
import "./CartItem.css";
import { Button } from "semantic-ui-react";

const CartItem = ({ data, remove }) => {
  return (
    <div className="cartItem">
      <img
        src={
          data.img
            ? data.img
            : "https://firebasestorage.googleapis.com/v0/b/emergente-ecommerce.appspot.com/o/Monsters%2Fdefault%20monster.jpg?alt=media&token=39bd69bb-7366-4d2c-a5ca-185264b9c8af"
        }
        alt={data.name}
      />
      <h3>{data.quantity}</h3>
      <p>{data.name}</p>
      <p>{`Experiencia ${data.xp}`}</p>
      <Button basic color="orange" onClick={remove}>
        Quitar
      </Button>
    </div>
  );
};

export default CartItem;
