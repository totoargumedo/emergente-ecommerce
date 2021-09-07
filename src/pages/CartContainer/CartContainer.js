import React, { useContext, useEffect, useState } from "react";

// LIBRERIAS
import "./CartContainer.css";
import { Link } from "react-router-dom";

// ASSETS
import meme from "../../assets/meme1.jpg";

// PROVIDER
import { CartContext } from "../../context/CartContext";

// COMPONENTES
import Cart from "../../components/Cart/Cart";

const CartContainer = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [voidCart, setVoidCart] = useState(false);

  useEffect(() => {
    if (cart.length != 0) {
      setVoidCart(true);
    } else {
      setVoidCart(false);
    }
  });

  return (
    <div>
      {voidCart ? (
        <Cart data={cart} remove={removeItem} clear={clearCart} />
      ) : (
        <Link to="/tienda">
          <img src={meme} alt="No hay cart" className="meme" />
        </Link>
      )}
    </div>
  );
};

export default CartContainer;
