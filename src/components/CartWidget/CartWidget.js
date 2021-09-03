import React, { useContext } from "react";

// STYLING
import "./CartWidget.css";

// LIBRERIAS

import { Icon } from "semantic-ui-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// PROVIDER
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="headerWidget">
      {/* <FontAwesomeIcon icon={faCartArrowDown} size="2x" />; */}
      <Icon name="cart" size="large" />
      <p>{cart.length}</p>
    </div>
  );
};

// export default CartWidget;
