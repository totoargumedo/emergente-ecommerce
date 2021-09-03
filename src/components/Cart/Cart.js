import React from "react";

// LIBRERIAS
import "./Cart.css";
import { Button } from "semantic-ui-react";

// COMPONENTES
import CartItem from "../CartItem/CartItem";

const Cart = ({ data, remove, clear }) => {
  return (
    <div className="cart">
      {data.map((cartItem) => {
        return (
          <>
            <CartItem data={cartItem} remove={remove} />
          </>
        );
      })}
      <Button basic color="orange" onClick={clear}>
        Vaciar
      </Button>
    </div>
  );
};

export default Cart;
