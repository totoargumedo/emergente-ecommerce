import React, { useContext } from "react";

// STYLING
import "./CartWidget.css";

// LIBRERIAS

import { Icon } from "semantic-ui-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// PROVIDER
import { CartContext } from "../../context/CartContext";
import ItemSearch from "../ItemSearch/ItemSearch";

export const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="headerWidget">
      {/* <FontAwesomeIcon icon={faCartArrowDown} size="2x" />; */}
      <Icon name="cart" size="large" />
      <p>{ItemSearch.length}</p>
    </div>
  );
};

// export default CartWidget;
