import React, { useContext } from "react";

// LIBRERIAS
import "./Cart.css";
import { Button } from "semantic-ui-react";

// PROVIDER
import { CartContext } from "../../context/CartContext";

// COMPONENTES
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.map((item) => {
        return (
          <>
            <CartItem data={{ cart, removeItem }} />
            <Button basic color="orange" onClick={clearCart}>
              Vaciar
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
