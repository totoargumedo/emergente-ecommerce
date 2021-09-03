import React from "react";

// LIBRERIAS
import "./CartContainer.css";

// ASSETS
// import meme from "../../assets/meme1.jpg";

// COMPONENTES
import Cart from "../../components/Cart/Cart";

const CartContainer = () => {
  return (
    <div>
      {/* <img src={meme} alt="No hay cart" className="meme" /> */}
      <Cart />
    </div>
  );
};

export default CartContainer;
