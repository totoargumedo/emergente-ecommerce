import React, { useContext, useEffect, useState } from "react";

// LIBRERIAS
import "./CartContainer.css";

// ASSETS
import meme from "../../assets/meme1.jpg";

// PROVIDER
import { CartContext } from "../../context/CartContext";

// COMPONENTES
import Cart from "../../components/Cart/Cart";

const CartContainer = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [voidCart, setVoidCart] = useState(true);

  useEffect(() => {
    if (!cart.length) {
      setVoidCart(false);
    }
  });

  return (
    <div>
      {voidCart ? (
        <img src={meme} alt="No hay cart" className="meme" />
      ) : (
        <Cart data={cart} remove={removeItem} clear={clearCart} />
      )}
    </div>
  );
};

export default CartContainer;
