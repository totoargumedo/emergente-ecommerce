import React from "react";

// LIBRERIAS
import "./CartContainer.css";

// ASSETS
import meme from "../../assets/meme1.jpg";

const CartContainer = () => {
  return (
    <div>
      <img src={meme} alt="No hay cart" className="meme" />
    </div>
  );
};

export default CartContainer;
