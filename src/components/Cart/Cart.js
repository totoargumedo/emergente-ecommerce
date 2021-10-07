import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./Cart.css";
import { Button } from "semantic-ui-react";

// COMPONENTES
import CartItem from "../CartItem/CartItem";
import BuyerContainer from "../BuyerContainer/BuyerContainer";

const Cart = ({ data, remove, clear, total, totalCalcutator }) => {
  const [endCompra, setEndCompra] = useState(false);

  const endCompraNow = () => {
    setEndCompra(!endCompra);
  };
  useEffect(() => {
    totalCalcutator();
  });
  return (
    <div>
      {endCompra ? (
        <BuyerContainer endCompraNow={endCompraNow} total={total} />
      ) : (
        <div className="cart">
          {data.map((cartItem) => {
            return (
              <>
                <CartItem data={cartItem} remove={remove} />
              </>
            );
          })}
          <p>{`Total de Experiencia: ${total}`}</p>
          <Button basic color="orange" onClick={clear}>
            Vaciar
          </Button>
          <Button basic color="blue" onClick={endCompraNow}>
            Adquirir Experiencia
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
